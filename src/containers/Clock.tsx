import React from "react";
import "../css/Clock.css";
import { connect } from "react-redux";
import {
  ustawisCountDown,
  ustawisStarting,
  ustawisCooldown,
  ustawisPrzerwa
} from "../actions/settingsActions";
import { SettingsState } from "../reducers/settingsReducer";
import { compose } from "recompose";
import Container from "react-bootstrap/Container";
import { Button, Segment } from "semantic-ui-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ClockDigits from "../containers/ClockDigits";

interface ComponentProps {}

interface LocalProps {
  minutyL: number;
  sekundyL: number;
  timeIsGrabbed: boolean;
  tick: number;
  rundyL: number;
  czasDoStartuL: number;
  currentRound: number;
}

interface StateProps {
  minuty: number;
  sekundy: number;
  isCooldown: boolean;
  isCountdown: boolean;
  isStarting: boolean;
  isPrzerwa: boolean;
  rundy: number;
  przerwa: number;
  cooldown: number;
  sygnalCoMinute: boolean;
  soundPack: number;
  czasDoStartu: number;
}

interface DispatchProps {
  ustawisCountDown: typeof ustawisCountDown;
  ustawisStarting: typeof ustawisStarting;
  ustawisCooldown: typeof ustawisCooldown;
  ustawisPrzerwa: typeof ustawisPrzerwa;
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
      currentRound: 1,
      czasDoStartuL: 10
    };
  }

  componentDidMount() {
    const { minuty, sekundy, isCountdown, rundy, czasDoStartu } = this.props;
    const { minutyL, sekundyL, czasDoStartuL } = this.state;
    if (!isCountdown) {
      if (
        minutyL != minuty ||
        sekundyL != sekundy ||
        czasDoStartuL != czasDoStartu
      ) {
        this.setState({
          minutyL: minuty,
          sekundyL: sekundy,
          tick: czasDoStartu,
          rundyL: rundy,
          czasDoStartuL: czasDoStartu
        });
      }
    }
  }

  componentDidUpdate() {
    const {
      minuty,
      sekundy,
      isCountdown,
      isStarting,
      czasDoStartu
    } = this.props;
    const { minutyL, sekundyL, tick, czasDoStartuL } = this.state;

    var x = this;

    if (!isCountdown && !isStarting) {
      if (
        minutyL != minuty ||
        sekundyL != sekundy ||
        czasDoStartuL != czasDoStartu
      ) {
        this.setState({
          minutyL: minuty,
          sekundyL: sekundy,
          tick: czasDoStartu,
          czasDoStartuL: czasDoStartu
        });
      }
    } else if (isStarting && !isCountdown) {
      if (tick == 0) {
        this.stopStarting();
        this.startCountdown();
        this.setState({
          tick: minuty * 60 + sekundy
        });
      }
      setTimeout(function() {
        if (tick > 0) {
          x.setState({
            tick: tick - 1
          });
        }
      }, 1000);
    } else if (isCountdown && !isStarting) {
      // if (tick == 0) {
      //   let path = "../src/sound/airhorn.mp3";
      //   const audio = new Audio(path);
      //   audio.play();
      // }
      setTimeout(function() {
        if (tick > 0) {
          x.setState({
            tick: tick - 1
          });
        }
      }, 1000);
    }
  }

  public getSeconds = (time: number) => {
    return time % 60;
  };

  public getMinutes = (time: number) => {
    return Math.floor(time / 60);
  };

  public startCountdown = () => {
    const { ustawisCountDown, minuty, sekundy } = this.props;
    //this.startStarting();
    // this.setState({
    //   tick: minuty * 60 + sekundy
    // });
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
    const { minuty, sekundy, czasDoStartu } = this.props;
    const { tick } = this.state;
    this.setState({
      tick: czasDoStartu
    });
  };

  public startStarting = () => {
    const { ustawisStarting, czasDoStartu } = this.props;
    const { tick } = this.state;

    if (tick == 0) {
      this.stopStarting();
    }

    if (ustawisStarting) {
      ustawisStarting(true);
    }
  };

  public stopStarting = () => {
    const { ustawisStarting } = this.props;
    if (ustawisStarting) {
      ustawisStarting(false);
    }
  };

  public resetStarting = () => {
    const { czasDoStartu } = this.props;
    this.setState({
      tick: czasDoStartu
    });
  };

  public getColor = () => {
    const { minuty, sekundy, isCountdown, isStarting } = this.props;
    const { tick } = this.state;
    const czas = minuty * 60 + sekundy;
    const procent = tick / czas;
    const green = 255 * procent;
    const red = 255 - green;

    if (isCountdown) {
      return (
        "rgb(" +
        parseInt(red.toString(), 10) +
        "," +
        parseInt(green.toString(), 10) +
        ",30)"
      );
    }
    if (isStarting) {
      return "rgb(0,100,255)";
    }
    return "rgb(0,100,255)";
  };

  public startButton = () => {
    const { ustawisStarting, isCountdown, isStarting } = this.props;
    const { tick } = this.state;

    if (!isStarting) {
      if (ustawisStarting) {
        ustawisStarting(true);
      }
    }
    // else{
    //   if (tick == 0) {
    //     this.stopStarting();
    //   }
    // }

    if (isCountdown) {
      if (ustawisCountDown) {
        ustawisCountDown(false);
      }
    }
  };

  render() {
    const { isCountdown, rundy } = this.props;
    const { tick, rundyL, currentRound } = this.state;
    let style = {
      color: this.getColor()
    };

    return (
      <Container>
        <ClockDigits
          minutyL={this.getMinutes(tick)}
          sekundyL={this.getSeconds(tick)}
          colorS={this.getColor()}
        ></ClockDigits>

        <Row>
          <Col className="ClockColumnCentered">
            <Button onClick={this.startButton} inverted>
              {isCountdown ? "Stop" : "Start"}
            </Button>
          </Col>
          <Col className="ClockColumnCentered ClockRounds" style={style}>
            Runda {currentRound}/{rundy}
          </Col>
          <Col className="ClockColumnCentered">
            <Button
              onClick={this.resetCountdown}
              // disabled={isCountdown}
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
        isStarting: _state.isStarting,
        isPrzerwa: _state.isPrzerwa,
        rundy: _state.rundy,
        przerwa: _state.przerwa,
        cooldown: _state.cooldown,
        sygnalCoMinute: _state.sygnalCoMinute,
        soundPack: _state.soundPack,
        czasDoStartu: _state.czasDoStartu
      };
    },
    {
      ustawisCountDown,
      ustawisStarting,
      ustawisCooldown,
      ustawisPrzerwa
    }
  )
)(Clock);

export default container;
