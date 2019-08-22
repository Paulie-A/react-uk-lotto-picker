import React, { Component } from "react";
import "./App.css";
import Lottery from "./Lottery";
import EuroMillions from "./EuroMillions";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>UK Lotto Number Picker App</h1>
        <Lottery />
        <Lottery title='EuroMillions' maxNum={50} numBalls={5} />
        <EuroMillions title="EuroMillions BonusBalls" maxNum={12} numBalls={2} />
        </div>
    );
  }
}

export default App;
