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
import moment from "moment";

interface ComponentProps {}

interface LocalProps {}

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
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open: boolean) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    let path = "../src/sound/airhorn.mp3";
    const audio = new Audio(path);
    const seconds = "00";
    const { minuty, sekundy } = this.props;

    const date = new Date("1995-12-17T03:" + minuty + ":" + sekundy);

    return (
      <Container>
        <div className="ClockNumbers ClockNumbersBlue">
          {/* {minuty}:{sekundy} */}
          {moment().format("mm:ss")}
        </div>
        <Row>
          <Col className="ClockColumnCentered">
            <Button inverted>Start</Button>
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
