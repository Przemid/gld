import React from "react";
import "../css/ClockDigits.css";
import { connect } from "react-redux";
import { SettingsState } from "../reducers/settingsReducer";
import { compose } from "recompose";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface ComponentProps {
  minutyL: number;
  sekundyL: number;
  colorS: string;
}

interface LocalProps {
  windowHeight: number;
  windowWidth: number;
}

interface StateProps {}

interface DispatchProps {}

type Props = ComponentProps & LocalProps & StateProps & DispatchProps;

export class ClockDigits extends React.Component<Props, LocalProps> {
  constructor(props: Props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  public formatTime = (minuty: number, sekundy: number) => {
    const { windowWidth, windowHeight } = this.state;
    const minutesString =
      minuty.toString().length === 1 ? "0" + minuty : minuty;
    const secondsString =
      sekundy.toString().length === 1 ? "0" + sekundy : sekundy;

    if (windowHeight > windowWidth) {
      return (
        <div>
          <Row>
            <Col className="ClockVertical">{minutesString}</Col>
          </Row>
          <Row>
            <Col className="ClockVerticalSeconds">{secondsString}</Col>
          </Row>
        </div>
      );
    }

    return minutesString + ":" + secondsString;
  };

  render() {
    const { minutyL, sekundyL, colorS } = this.props;

    let style = {
      color: colorS
    };

    return (
      <Container>
        <div className="ClockNumbers" style={style}>
          {this.formatTime(minutyL, sekundyL)}
        </div>
      </Container>
    );
  }
}
const container = compose<Props, ComponentProps>(
  connect<StateProps, DispatchProps, {}, SettingsState>(
    (_state: SettingsState, _props: any) => {
      return {};
    },
    {}
  )
)(ClockDigits);

export default container;
