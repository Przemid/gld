import React from "react";
import logo from "../img/logo_kolor.jpg";
import "../css/SettingsPage.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToggleButton from 'react-toggle-button'

class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sygnalCoMin: true
    };
  }

  componentDidMount() {
    this.setState({ sygnalCoMin: true });
  }

  render() {

    return (
      <div className="SettingsPage">
        
        <Container>
          <Row>
          <img src={logo} alt="logo" />
          </Row>
          <Row>
            <Col>Ilość rund:</Col>
            <input type="number" className="SettingsInput"></input>
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
              value= {this.state.sygnalCoMin}
              onToggle={(value) => {
                this.setState({
                  sygnalCoMin: !value,
                })
              }} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default SettingsPage;
