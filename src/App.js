import React from 'react';
import HomePage from '../src/containers/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { simpleAction } from '../src/actions/simpleAction';

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: (event) => dispatch(simpleAction(event))
 })

class App extends React.Component {
  /**
   * @memberof App
   * @summary handles button click 
   */
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div>
               <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.simpleAction}>Test redux action</button>
      
      <HomePage>
     </HomePage>
     </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
