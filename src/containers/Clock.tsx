import React from "react";
import "../css/Clock.css";
import { connect } from "react-redux";
import { ustawMinuty } from "../actions/settingsActions";
import { SettingsState } from "../reducers/settingsReducer";
import { compose } from "recompose";
import Container from "react-bootstrap/Container";
import { Button, Segment } from "semantic-ui-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactNoSleep from "react-no-sleep";

interface ComponentProps {}

interface LocalProps {
  minutyL: number;
  sekundyL: number;
  timeIsGrabbed: boolean;
}

interface StateProps {
  minuty: number;
  sekundy: number;
}

interface DispatchProps {
  ustawMinuty: typeof ustawMinuty;
}

type Props = ComponentProps & LocalProps & StateProps & DispatchProps;

export class Clock extends React.Component<Props, LocalProps> {
  constructor(props: Props) {
    super(props);
    this.state = {
      minutyL: 3,
      sekundyL: 0,
      timeIsGrabbed: false
    };
  }

  componentDidMount() {
    const { minuty, sekundy } = this.props;
    const { minutyL, sekundyL } = this.state;
    if (minutyL != minuty || sekundyL != sekundy) {
      this.setState({
        minutyL: minuty,
        sekundyL: sekundy
      });
    }
  }

  render() {
    let path = "../src/sound/airhorn.mp3";
    const audio = new Audio(path);
    const seconds = "00";
    const { minutyL, sekundyL } = this.state;

    return (
      <Container>
        <div className="ClockNumbers ClockNumbersBlue">
          {minutyL}:{sekundyL < 10 ? `0${sekundyL}` : sekundyL}
        </div>
        <Row>
          <Col className="ClockColumnCentered">
            <ReactNoSleep>
              {({ isOn, enable, disable }) => (
                <Button onClick={isOn ? disable : enable} inverted>
                  Start
                </Button>
              )}
            </ReactNoSleep>
          </Col>
          <Col className="ClockColumnCentered">
            <Button disabled inverted>
              Reset
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
const container = compose<Props, ComponentProps>(
  connect<StateProps, DispatchProps, {}, SettingsState>(
    (_state: SettingsState, _props: any) => {
      return {
        minuty: _state.minuty,
        sekundy: _state.sekundy
      };
    },
    {
      ustawMinuty
    }
  )
)(Clock);

export default container;
