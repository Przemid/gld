import React from "react";
import "../css/Clock.css";
import { connect } from "react-redux";
import { ustawisCountDown } from "../actions/settingsActions";
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
  tick: number;
  rundyL: number;
  currentRound: number;
}

interface StateProps {
  minuty: number;
  sekundy: number;
  isCooldown: boolean;
  isCountdown: boolean;
  rundy: number;
  przerwa: number;
  cooldown: number;
  sygnalCoMinute: boolean;
  soundPack: number;
  czasDoStartu: number;
}

interface DispatchProps {
  ustawisCountDown: typeof ustawisCountDown;
}

type Props = ComponentProps & LocalProps & StateProps & DispatchProps;

export class Clock extends React.Component<Props, LocalProps> {
  constructor(props: Props) {
    super(props);
    this.state = {
      minutyL: 3,
      sekundyL: 10,
      timeIsGrabbed: false,
      tick: 0,
      rundyL: 3,
      currentRound: 1
    };
  }

  componentDidMount() {
    const { minuty, sekundy, isCountdown, rundy } = this.props;
    const { minutyL, sekundyL } = this.state;
    if (!isCountdown) {
      if (minutyL != minuty || sekundyL != sekundy) {
        this.setState({
          minutyL: minuty,
          sekundyL: sekundy,
          tick: minuty * 60 + sekundy,
          rundyL: rundy
        });
      }
    }
  }

  componentDidUpdate() {
    const { minuty, sekundy, isCountdown } = this.props;
    const { minutyL, sekundyL, tick } = this.state;
    if (!isCountdown) {
      if (minutyL != minuty || sekundyL != sekundy) {
        this.setState({
          minutyL: minuty,
          sekundyL: sekundy,
          tick: minuty * 60 + sekundy
        });
      }
    } else {
      var x = this;
      if (tick == 0) {
        let path = "../src/sound/airhorn.mp3";
        const audio = new Audio(path);
        audio.play();
      }
      setTimeout(function() {
        if (tick > 0) {
          x.setState({
            tick: tick - 1
          });
        }
      }, 1000);
    }
  }

  public formatTime = (time: number) => {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    const minutesString =
      minutes.toString().length === 1 ? "0" + minutes : minutes;
    const secondsString =
      seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutesString + ":" + secondsString;
  };

  public startCountdown = () => {
    const { ustawisCountDown } = this.props;
    if (ustawisCountDown) {
      ustawisCountDown(true);
    }
  };

  public stopCountdown = () => {
    const { ustawisCountDown } = this.props;
    if (ustawisCountDown) {
      ustawisCountDown(false);
    }
  };

  public resetCountdown = () => {
    const { minuty, sekundy } = this.props;
    const { tick } = this.state;
    this.setState({
      tick: minuty * 60 + sekundy
    });
  };

  public getColor = () => {
    const { minuty, sekundy } = this.props;
    const { tick } = this.state;
    const czas = minuty * 60 + sekundy;
    const procent = tick / czas;
    const green = 255 * procent;
    const red = 255 - green;

    return (
      "rgb(" +
      parseInt(red.toString(), 10) +
      "," +
      parseInt(green.toString(), 10) +
      ",0)"
    );
  };

  render() {
    const { isCountdown, rundy } = this.props;
    const { tick, rundyL, currentRound } = this.state;
    let style = {
      color: this.getColor()
    };

    return (
      <Container>
        <div className="ClockNumbers" style={style}>
          {this.formatTime(tick)}
        </div>
        <Row>
          <Col className="ClockColumnCentered">
            {/* <ReactNoSleep>
              {({ isOn, enable, disable }) => (
                
              )}
            </ReactNoSleep> */}
            <Button
              onClick={isCountdown ? this.stopCountdown : this.startCountdown}
              inverted
            >
              {isCountdown ? "Stop" : "Start"}
            </Button>
          </Col>
          <Col className="ClockColumnCentered ClockRounds" style={style}>
            Runda {currentRound}/{rundy}
          </Col>
          <Col className="ClockColumnCentered">
            <Button
              onClick={this.resetCountdown}
              disabled={isCountdown}
              inverted
            >
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
        sekundy: _state.sekundy,
        isCooldown: _state.isCooldown,
        isCountdown: _state.isCountdown,
        rundy: _state.rundy,
        przerwa: _state.przerwa,
        cooldown: _state.cooldown,
        sygnalCoMinute: _state.sygnalCoMinute,
        soundPack: _state.soundPack,
        czasDoStartu: _state.czasDoStartu
      };
    },
    {
      ustawisCountDown
    }
  )
)(Clock);

export default container;
