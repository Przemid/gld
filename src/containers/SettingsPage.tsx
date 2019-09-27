import React from "react";
import logo from "../img/logo_kolor.jpg";
import "../css/SettingsPage.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { ustawMinuty, ustawSekundy, ustawRundy, ustawPrzerwa, ustawCooldown, ustawSygnalCoMinute, ustawSoundPack, ustawCzasDoStartu } from "../actions/settingsActions";
import { SettingsState } from "../reducers/settingsReducer";
import { compose } from "recompose";
import { Dropdown } from "semantic-ui-react";

interface ComponentProps {}

interface LocalProps {}

interface StateProps {
  minuty: number;
  sekundy: number;
}

interface DispatchProps {
  ustawMinuty: typeof ustawMinuty;
  ustawSekundy: typeof ustawSekundy;
  ustawRundy: typeof ustawRundy;
  ustawPrzerwa: typeof ustawPrzerwa;
  ustawCooldown: typeof ustawCooldown;
  ustawSygnalCoMinute: typeof ustawSygnalCoMinute;
  ustawSoundPack: typeof ustawSoundPack;
  ustawCzasDoStartu: typeof ustawCzasDoStartu;
}

type Props = ComponentProps & LocalProps & StateProps & DispatchProps;

export class SettingsPage extends React.Component<Props, LocalProps> {
  public constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public ustawMinuty = (e: any, data: any) => {
    const { ustawMinuty } = this.props;
    if (ustawMinuty) {
      ustawMinuty(data.value);
    }
  };

  public ustawSekundy = (e: any, data: any) => {
    const { ustawSekundy } = this.props;
    if (ustawSekundy) {
      ustawSekundy(Number(data.value));
    }
  };

  public ustawRundy = (e: any, data: any) => {
    const { ustawRundy } = this.props;
    if (ustawRundy) {
      ustawRundy(Number(data.value));
    }
  };

  public ustawPrzerwa = (e: any, data: any) => {
    const { ustawPrzerwa } = this.props;
    if (ustawPrzerwa) {
      ustawPrzerwa(Number(data.value));
    }
  };

  public ustawCooldown = (e: any, data: any) => {
    const { ustawCooldown } = this.props;
    if (ustawCooldown) {
      ustawCooldown(Number(data.value));
    }
  };

  public ustawSygnalCoMinute = (e: any, data: any) => {
    const { ustawSygnalCoMinute } = this.props;
    if (ustawSygnalCoMinute) {
      ustawSygnalCoMinute(data.value);
    }
  };

  public ustawSoundPack = (e: any, data: any) => {
    const { ustawSoundPack } = this.props;
    if (ustawSoundPack) {
      ustawSoundPack(Number(data.value));
    }
  };
  
  public ustawCzasDoStartu = (e: any, data: any) => {
    const { ustawCzasDoStartu } = this.props;
    if (ustawCzasDoStartu) {
      ustawCzasDoStartu(Number(data.value));
    }
  };
  

  render() {
    const friendOptions = [
      {
        key: "Horn",
        text: "Horn",
        value: 1,
        image: {
          avatar: true,
          src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
        }
      },
      {
        key: "Arek",
        text: "Arek",
        value: 2,
        image: {
          avatar: true,
          src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
        }
      },
      // {
      //   key: "Marcin W",
      //   text: "Marcin W",
      //   value: "Marcin W",
      //   image: {
      //     avatar: true,
      //     src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
      //   }
      // },
      // {
      //   key: "Bronek",
      //   text: "Bronek",
      //   value: "Bronek",
      //   image: {
      //     avatar: true,
      //     src: "https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
      //   }
      // },
      // {
      //   key: "Marcin J",
      //   text: "Marcin J",
      //   value: "Marcin J",
      //   image: {
      //     avatar: true,
      //     src: "https://react.semantic-ui.com/images/avatar/small/christian.jpg"
      //   }
      // }
    ];

    const roundOptions = [
      {
        key: "1",
        text: "1",
        value: 1
      },
      {
        key: "2",
        text: "2",
        value: 2
      },
      {
        key: "3",
        text: "3",
        value: 3
      },
      {
        key: "4",
        text: "4",
        value: 4
      },
      {
        key: "5",
        text: "5",
        value: 5
      },
      {
        key: "6",
        text: "6",
        value: 6
      },
      {
        key: "7",
        text: "7",
        value: 7
      },
      {
        key: "8",
        text: "8",
        value: 8
      },
      {
        key: "9",
        text: "9",
        value: 9
      },
      {
        key: "10",
        text: "10",
        value: 10
      }
    ];

    const secondsOptions = [
      {
        key: "0",
        text: "0",
        value: 0
      },
      {
        key: "5",
        text: "5",
        value: 5
      },
      {
        key: "10",
        text: "10",
        value: 10
      },
      {
        key: "15",
        text: "15",
        value: 15
      },
      {
        key: "30",
        text: "30",
        value: 30
      },
      {
        key: "45",
        text: "45",
        value: 45
      },
    ];

    const cooldownOptions = [
      {
        key: "0",
        text: "0",
        value: 0
      },
      {
        key: "15",
        text: "15",
        value: 15
      },
      {
        key: "30",
        text: "30",
        value: 30
      },
      {
        key: "45",
        text: "45",
        value: 45
      },
      {
        key: "60",
        text: "60",
        value: 60
      }
    ];

    const boolOptions = [
      {
        key: "tak",
        text: "Tak",
        value: "true"
      },
      {
        key: "nie",
        text: "Nie",
        value: "false"
      }
    ];

    return (
      <div className="SettingsPage">
        <Container>
          <Row>
            <Col className="ColumnBlack">
              <img src={logo} alt="logo" />
            </Col>
          </Row>
          <Row>Rundy:</Row>
          <Row>
            <Dropdown
              placeholder="Wybierz ile rund"
              fluid
              selection
              options={roundOptions}
              onChange={this.ustawRundy}
              defaultValue={3}
            />
          </Row>
          <Row>Minuty:</Row>
          <Row>
            <Dropdown
              placeholder="Wybierz ile minut na rundę"
              fluid
              selection
              options={roundOptions}
              onChange={this.ustawMinuty}
              defaultValue={3}
            />
          </Row>
          <Row>Sekundy:</Row>
          <Row>
            <Dropdown
              placeholder="Wybierz ile sekund"
              fluid
              selection
              options={secondsOptions}
              onChange={this.ustawSekundy}
              defaultValue={0}
            />
          </Row>
          <Row>Przerwa w sekundach:</Row>
          <Row>
            <Dropdown
              placeholder="Wybierz przerwę"
              fluid
              selection
              options={cooldownOptions}
              onChange={this.ustawPrzerwa}
              defaultValue={60}
            />
          </Row>
          <Row>Czas do startu:</Row>
          <Row>
            <Dropdown
              placeholder="Wybierz czas przygotowania"
              fluid
              selection
              options={secondsOptions}
              onChange={this.ustawCzasDoStartu}
              defaultValue={10}
            />
          </Row>
          <Row>Cooldown:</Row>
          <Row>
            <Dropdown
              placeholder="Wybierz cooldown"
              fluid
              selection
              options={cooldownOptions}
              onChange={this.ustawCooldown}
              defaultValue={60}
            />
          </Row>

          <Row>Sygnał co minutę:</Row>
          <Row>
            <Dropdown
              placeholder="Wybierz"
              fluid
              selection
              options={boolOptions}
              onChange={this.ustawSygnalCoMinute}
              defaultValue={"true"}
            />
          </Row>
          <Row>SoundPack:</Row>
          <Row>
            <Dropdown
              placeholder="Wybierz trenera"
              fluid
              selection
              options={friendOptions}
              onChange={this.ustawSoundPack}
              defaultValue={1}
            />
          </Row>
        </Container>
      </div>
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
      ustawMinuty,
      ustawSekundy,
      ustawRundy,
      ustawPrzerwa,
      ustawCooldown,
      ustawSygnalCoMinute,
      ustawSoundPack,
      ustawCzasDoStartu
    }
  )
)(SettingsPage);

export default container;
