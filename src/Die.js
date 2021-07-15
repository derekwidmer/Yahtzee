import React, { Component } from "react";
import "./Die.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix, faDice } from '@fortawesome/free-solid-svg-icons'

class Die extends Component {
  render() {

    let icon;
    switch (this.props.val) {
      case 1: icon = faDiceOne; break;
      case 2: icon = faDiceTwo; break;
      case 3: icon = faDiceThree; break;
      case 4: icon = faDiceFour; break;
      case 5: icon = faDiceFive; break;
      case 6: icon = faDiceSix; break;
      default: icon = faDiceOne;
    }
    return (
      <FontAwesomeIcon
        className={`Die ${this.props.locked ? 'Die-locked' : ''} ${this.props.rolling ? 'Die-rolling' : ''}`}
        icon={icon}
        onClick={!this.props.rolling ? this.props.handleClick : null}
      />
    );
  }
}

export default Die;
