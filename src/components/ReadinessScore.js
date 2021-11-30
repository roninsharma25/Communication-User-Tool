import React, { Component } from "react";

export class ReadinessScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }

  getColor = () => {
    const percentage = this.state.score % 100;
    console.log(percentage);
    if (percentage < 20) {
      return "red";
    } else if (percentage - 20 < 20) {
      return "orange";
    } else if (percentage - 40 < 20) {
      return "#7A7A20";
    } else if (percentage - 60 < 20) {
      return "#6EB10A";
    } else {
      return "blue";
    }
  };

  render() {
    return (
      <div className="readiness-score-analytics">
        <h4 className="readiness-score-title">Your Readiness Score: </h4>
        <div className="score-and-list-container">
          <ul>
            <li className="excellent">
              <label>Excellent</label>
            </li>
            <li className="very-good">
              <label>Very Good</label>
            </li>
            <li className="good">
              <label>Good</label>
            </li>
            <li className="fair">
              <label>Fair</label>
            </li>
            <li className="poor">
              <label>Poor</label>
            </li>
          </ul>

          <h4
            className="score-display"
            style={{ "background-color": this.getColor() }}
          >
            {this.state.score}
          </h4>
        </div>
      </div>
    );
  }
}

export default ReadinessScore;
