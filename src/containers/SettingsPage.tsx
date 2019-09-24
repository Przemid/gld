import React from "react";
import logo from "../img/logo_kolor.jpg";
import "../css/SettingsPage.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import ToggleButton from "react-toggle-button";
import { connect } from "react-redux";
import { ustawMinuty, ustawSekundy } from "../actions/settingsActions";
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
      ustawMinuty(Number(data.value));
    }
  };

  public ustawSekundy = (e: any, data: any) => {
    const { ustawSekundy } = this.props;
    if (ustawSekundy) {
      ustawSekundy(Number(data.value));
    }
  };

  render() {
    const { minuty } = this.props;
    const friendOptions = [
      {
        key: "Marcin W",
        text: "Marcin W",
        value: "Marcin W",
        image: {
          avatar: true,
          src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
        }
      },
      {
        key: "Arek",
        text: "Arek",
        value: "Arek",
        image: {
          avatar: true,
          src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
        }
      },
      {
        key: "Bronek",
        text: "Bronek",
        value: "Bronek",
        image: {
          avatar: true,
          src: "https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
        }
      },
      {
        key: "Marcin J",
        text: "Marcin J",
        value: "Marcin J",
        image: {
          avatar: true,
          src: "https://react.semantic-ui.com/images/avatar/small/christian.jpg"
        }
      }
    ];

    const roundOptions = [
      {
        key: "1",
        text: "1",
        value: "1"
      },
      {
        key: "2",
        text: "2",
        value: "2"
      },
      {
        key: "3",
        text: "3",
        value: "3"
      },
      {
        key: "4",
        text: "4",
        value: "4"
      },
      {
        key: "5",
        text: "5",
        value: "5"
      }
    ];

    const secondsOptions = [
      {
        key: "0",
        text: "0",
        value: "0"
      },
      {
        key: "15",
        text: "15",
        value: "15"
      },
      {
        key: "30",
        text: "30",
        value: "30"
      },
      {
        key: "45",
        text: "45",
        value: "45"
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
            />
          </Row>
          <Row>Przerwa w sekundach:</Row>
          <Row>
            <Dropdown
              placeholder="Wybierz przerwę"
              fluid
              selection
              options={secondsOptions}
              // onChange={this.ustawMinuty}
            />
          </Row>
          <Row>Cooldown:</Row>
          <Row>
            <Dropdown
              placeholder="Wybierz cooldown"
              fluid
              selection
              options={secondsOptions}
              // onChange={this.ustawMinuty}
            />
          </Row>

          <Row>Sygnał co minutę:</Row>
          <Row>
            <Dropdown
              placeholder="Wybierz"
              fluid
              selection
              options={boolOptions}
              // onChange={this.ustawMinuty}
            />
          </Row>
          <Row>SoundPack:</Row>
          <Row>
            <Dropdown
              placeholder="Wybierz trenera"
              fluid
              selection
              options={friendOptions}
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
      ustawSekundy
    }
  )
)(SettingsPage);

export default container;
