import React, { Component } from "react";
import BonusBall from "./BonusBall";
import "./EuroMillions.css";

class EuroMillions extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 5,
    maxNum: 50
  };
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls }) };
    this.handleClick = this.handleClick.bind(this);
  }
  generate() {
    this.setState(curState => ({
      nums: curState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  }
  handleClick() {
    this.generate();
  }
  render() {
    return (
      <section className='EuroMillions'>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <BonusBall num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default EuroMillions;