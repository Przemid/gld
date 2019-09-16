import React from "react";
import Sidebar from "react-sidebar";
import logo from "../img/logo_kolor.jpg";
import "../css/HomePage.css";
import ReactNoSleep from "react-no-sleep";
import airhornFile from "../sound/airhorn.mp3";
import settingsIcon from "../img/setting-512.png";

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
          sidebar={<img src={logo} className="App-logo" alt="logo" />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
        >
          <img
            src={settingsIcon}
            alt="Settings"
            onClick={() => this.onSetSidebarOpen(true)}
            style={{ width: "50px", height: "50px" }}
          />

          <header className="App-header">
            <p className="G-logo" onClick={() => audio.play()}>
              Powered by <b>Goliat</b>
            </p>

            <ReactNoSleep>
              {({ isOn, enable, disable }) => (isOn = true)}
            </ReactNoSleep>
          </header>
        </Sidebar>
      </div>
    );
  }
}

export default HomePage;
