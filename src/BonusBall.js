import React, { Component } from "react";
import "./BonusBall.css";

class BonusBall extends Component {
  render() {
    return <div className='BonusBall'>{this.props.num}</div>;
  }
}
export default BonusBall;