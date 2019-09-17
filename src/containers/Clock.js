import React from "react";
import "../css/Clock.css";
import airhornFile from "../sound/airhorn.mp3";
import index from "../index"

class Clock extends React.Component {
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
    const minutes = "00";
    const seconds = "00";

    return (
      <div className="ClockNumbers ClockNumbersBlue">
        {minutes}:{seconds}
      </div>
    );
  }
}

export default Clock;
