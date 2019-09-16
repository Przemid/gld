import React from "react";
import logo from "../img/logo_male.jpg";
import "../css/HomePage.css";
import ReactNoSleep from "react-no-sleep";
import airhornFile from "../sound/airhorn.mp3";

class HomePage extends React.Component {
  render() {
    let audio = new Audio(airhornFile);

    return (
      <div className="HomePage">
        <header className="App-header">
          <img src={logo} alt="GLD" onClick={() => audio.play()} />
          <p>GŁDTEAM timer</p>
          <audio id="airhorn">
            <source src={airhornFile} type="audio/mpeg"></source>
          </audio>
          <ReactNoSleep>
            {({ isOn, enable, disable }) => (
              <button onClick={isOn ? disable : enable}>
                {isOn ? "on" : "off"}
              </button>
            )}
          </ReactNoSleep>
        </header>
      </div>
    );
  }
}

export default HomePage;
