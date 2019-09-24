import React from "react";
import "../css/Clock.css";
import { connect } from "react-redux";
import { ustawMinuty } from "../actions/settingsActions";
import {SettingsState} from "../reducers/settingsReducer";
import { compose } from 'recompose';

interface ComponentProps {

}

interface LocalProps {
}

interface StateProps {
	minuty:number;
}

interface DispatchProps {ustawMinuty: typeof ustawMinuty}

type Props = ComponentProps & LocalProps & StateProps & DispatchProps;

export class Clock extends React.Component<Props, LocalProps> {
  constructor(props: Props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open: boolean) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    let path = "../src/sound/airhorn.mp3";
    const audio = new Audio(path);
    const seconds = "00";
    const {minuty } = this.props;

    return (
      <div className="ClockNumbers ClockNumbersBlue">
        {minuty}:{seconds}

      </div>
    );
  }
}
const container = compose<Props, ComponentProps>(
	connect<StateProps, DispatchProps, {}, SettingsState>(
		(_state: SettingsState, _props: any) => {
			return {
				minuty: _state.minuty
			};
		},
		{
      ustawMinuty
    }
	)
)(Clock);



export default container;
