import React, { Component } from "react";
import back_arrow from "../images/back-arrow.png";
import { Donut } from "react-dial-knob";

export default class ReadinessScore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getColor = () => {
    const score = this.props.score;
    if (score < 20) {
      return "red";
    } else if (score - 20 < 20) {
      return "orange";
    } else if (score - 40 < 20) {
      return "#7A7A20";
    } else if (score - 60 < 20) {
      return "#6EB10A";
    } else {
      return "blue";
    }
  };

  render() {
    return (
      <div className="readiness-score-analytics">
        <h4 className="readiness-score-title">Your Readiness Score: </h4>
        <div>
          <div style={{ flex: "left", width: "40%", display: "block" }}>
            <center style={{ "vertical-align": "middle" }}>
              <Donut
                diameter={200}
                min={0}
                max={100}
                step={1}
                value={this.props.score}
                theme={{
                  donutColor: this.getColor(),
                }}
                ariaLabelledBy={"my-label"}
                className="dial"
                style={{
                  margin: "0",
                  position: "relative",
                  top: "50%",
                  left: "50%",
                  "margin-right": "-50%",
                  display: "block",
                }}
              />
            </center>
            <center>
              <h5 className="score-text">Score</h5>
            </center>
          </div>
          <div className="score-display-container">
            <h4
              style={{
                "background-color": this.getColor(),
              }}
              className="score-display"
            >
              {this.props.score}
            </h4>
          </div>
        </div>
        <div>
          <button
            to="/resume_analysis"
            onClick={this.props.handleBack}
            className="back-button"
          >
            <img src={back_arrow} className="back-arrow-image" alt="Back Arrow" /> Back
          </button>
        </div>
      </div>
    );
  }
}
