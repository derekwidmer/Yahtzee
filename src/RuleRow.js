import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const active = this.props.score === undefined ? true : false;
    const { rolling } = this.props;
    return (
      <tr className={`RuleRow ${active ? 'RuleRow-active' : 'RuleRow-disabled'}`} onClick={active && !rolling ? this.props.doScore : null}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score === undefined ? this.props.description : this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;