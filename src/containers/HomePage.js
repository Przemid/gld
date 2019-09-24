import React from "react";
import Sidebar from "react-sidebar";
import "../css/HomePage.css";
import ReactNoSleep from "react-no-sleep";
import airhornFile from "../sound/airhorn.mp3";
import settingsIcon from "../img/setting-512.png";
import SettingsPage from "../containers/SettingsPage";
import Clock from "../containers/Clock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    const audio = new Audio(airhornFile);
    return (
      <div className="HomePage">
        <Sidebar
          sidebar={<SettingsPage></SettingsPage>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "black" } }}
        >
          <img
            src={settingsIcon}
            alt="SettingsIcon"
            onClick={() => this.onSetSidebarOpen(true)}
            style={{ width: "30px", height: "30px" }}
          />

          <header className="App-header">
            <Container>
              <Clock></Clock>
              <Row>
                <Col className="App-footer">
                  <p className="G-logo" onClick={() => audio.play()}>
                    Powered by <b>Goliat</b>
                  </p>
                </Col>
              </Row>
            </Container>

            <ReactNoSleep>{({ isOn, enable, disable }) => enable}</ReactNoSleep>
          </header>
        </Sidebar>
      </div>
    );
  }
}

export default HomePage;
