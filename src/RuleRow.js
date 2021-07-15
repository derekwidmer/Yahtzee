import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const active = this.props.score === undefined ? true : false;
    return (
      <tr className={`RuleRow ${active ? 'RuleRow-active' : 'RuleRow-disabled'}`} onClick={active ? this.props.doScore : null}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score === undefined ? this.props.description : this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;