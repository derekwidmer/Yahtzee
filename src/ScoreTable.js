import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {
  getTotalScore() {
    const { scores } = this.props;
    let total = 0;
    for (let key in scores) {
      if (scores[key]) total += scores[key]
    }
    return total;
  }

  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Ones" description="Sum of all Ones" score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} rolling={this.props.rolling} />
              <RuleRow name="Twos" description="Sum of all Twos" score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} rolling={this.props.rolling} />
              <RuleRow name="Threes" description="Sum of all Threes" score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} rolling={this.props.rolling} />
              <RuleRow name="Fours" description="Sum of all Fours" score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} rolling={this.props.rolling} />
              <RuleRow name="Fives" description="Sum of all Fives" score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} rolling={this.props.rolling} />
              <RuleRow name="Sixes" description="Sum of all Sixes" score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} rolling={this.props.rolling} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Three of Kind" description="Sum of all dice" score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} rolling={this.props.rolling} />
              <RuleRow name="Four of Kind" description="Sum of all dice" score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} rolling={this.props.rolling} />
              <RuleRow name="Full House" description="Scores 25" score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} rolling={this.props.rolling} />
              <RuleRow name="Small Straight" description="Scores 30" score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} rolling={this.props.rolling} />
              <RuleRow name="Large Straight" description="Scores 40" score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} rolling={this.props.rolling} />
              <RuleRow name="Yahtzee" description="Scores 50" score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} rolling={this.props.rolling} />
              <RuleRow name="Chance" description="Sum of all dice" score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} rolling={this.props.rolling} />
            </tbody>
          </table>
        </section>
        <h2>Total Score: {this.getTotalScore()}</h2>
      </div>
    )
  }
}

export default ScoreTable;