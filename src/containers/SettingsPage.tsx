import React from "react";
import logo from "../img/logo_kolor.jpg";
import "../css/SettingsPage.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import ToggleButton from "react-toggle-button";
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

export class SettingsPage extends React.Component<Props, LocalProps> {
	public constructor(props: Props) {
    super(props);
    this.state = {
      
    };
  }
  
  public ustawMinuty = (e:any) => {
		const { ustawMinuty } = this.props;
		if (ustawMinuty) {
			ustawMinuty(Number(e.currentTarget.value));
		}
  };
  

  render() {
    const { minuty } = this.props;
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
              
            ></input>
          </Row>
          <Row>
            <Col>Czas w minutach:</Col>
            <input type="number" className="SettingsInput" defaultValue={minuty.toString()} onChange={this.ustawMinuty}></input>
          </Row>
          <Row>
            <Col>Przerwa w sekundach:</Col>
            <input type="number" className="SettingsInput"></input>
          </Row>
          <Row>
            <Col>Sygnał co minutę:</Col>
            {/* <ToggleButton
              inactiveLabel={"Nie"}
              activeLabel={"Tak"}
              value={this.state.sygnalCoMin}
              onToggle={value => {
                this.setState({
                  sygnalCoMin: !value
                });
              }}
            /> */}
          </Row>
          <Row>
            <Col>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};


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
)(SettingsPage);



export default container;