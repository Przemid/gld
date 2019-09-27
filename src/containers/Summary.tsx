import React from "react";
import "../css/Clock.css";
import { connect } from "react-redux";
import { SettingsState } from "../reducers/settingsReducer";
import { compose } from "recompose";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface ComponentProps {}

interface LocalProps {}

interface StateProps {
  minuty: number;
  sekundy: number;
  rundy: number;
  przerwa: number;
  cooldown: number;
  sygnalCoMinute: boolean;
}

interface DispatchProps {
  
}

type Props = ComponentProps & LocalProps & StateProps & DispatchProps;

export class Summary extends React.Component<Props, LocalProps> {
  constructor(props: Props) {
    super(props);
  
  }

  render() {
    let path = "../src/sound/airhorn.mp3";
    const audio = new Audio(path);
    const seconds = "00";
    const { minuty, sekundy, rundy, przerwa, cooldown, sygnalCoMinute } = this.props;

    return (
      <Container>
        <Row>
          <Col className="ClockColumnCentered">
            <p>Rundy:{rundy} | Czas:{minuty}:{sekundy} | Przerwa: {przerwa}s | Cooldown: {cooldown}s | Sygnał co minutę: {sygnalCoMinute ? "Tak" : "Nie"}</p>
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
        sekundy: _state.sekundy,
        rundy: _state.rundy,    
        przerwa: _state.przerwa,
        cooldown: _state.cooldown,
        sygnalCoMinute: _state.sygnalCoMinute
      };
    },
    {
      
    }
  )
)(Summary);

export default container;
