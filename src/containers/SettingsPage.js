import React from "react";
import logo from "../img/logo_kolor.jpg";
import "../css/SettingsPage.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToggleButton from "react-toggle-button";
import FullScreen from "react-request-fullscreen";
import { connect } from "react-redux";
import { ustawMinuty } from "../actions/settingsActions";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  ustawMinuty: event => dispatch(ustawMinuty(event))
});

class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sygnalCoMin: true,
      isFullScreen: false
    };
  }

  onFullScreenChange(isFullScreen) {
    this.setState({
      isFullScreen
    });
  }

  requestOrExitFullScreen() {
    this.fullScreenRef.fullScreen();
  }

  requestOrExitFullScreenByElement() {
    this.elFullScreenRef.fullScreen(this.elRef);
  }

  componentDidMount() {
    this.setState({ sygnalCoMin: true });
  }

  ustawMinuty = event => {
    // this.props.simpleAction();
  };

  render() {
    const { isFullScreen } = this.state;
    return (
      <div className="SettingsPage">
        <Container>
          <Row>
            <Col>
              <img src={logo} alt="logo" />
            </Col>
          </Row>
          <Row>
            <Col>Ilość rund:</Col>
            <input
              type="number"
              className="SettingsInput"
              onChange={this.ustawMinuty}
            ></input>
          </Row>
          <Row>
            <Col>Czas w minutach:</Col>
            <input type="number" className="SettingsInput"></input>
          </Row>
          <Row>
            <Col>Przerwa w sekundach:</Col>
            <input type="number" className="SettingsInput"></input>
          </Row>
          <Row>
            <Col>Sygnał co minutę:</Col>
            <ToggleButton
              inactiveLabel={"Nie"}
              activeLabel={"Tak"}
              value={this.state.sygnalCoMin}
              onToggle={value => {
                this.setState({
                  sygnalCoMin: !value
                });
              }}
            />
          </Row>
          <Row>
            <Col>
              <br />
              <FullScreen
                ref={ref => {
                  this.fullScreenRef = ref;
                }}
                onFullScreenChange={this.onFullScreenChange.bind(this)}
              >
                <div
                  className="rq"
                  onClick={this.requestOrExitFullScreen.bind(this)}
                >
                  {!isFullScreen ? "FullScreen" : "Exit FullScreen"}
                </div>
              </FullScreen>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPage);
