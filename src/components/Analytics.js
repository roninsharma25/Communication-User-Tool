import React, { Component } from "react";
import ReadinessScore from "./ReadinessScore";
import { Link } from "react-router-dom";

export default class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleBack = this.handleBack.bind(this);
  }

  handleBack = () => {
    window.location.href = "/resume-analysis";
  };

  render() {
    return (
      <div>
        <ReadinessScore />
        <br></br>
        <h4>Most Important Communication Skills: </h4>
        <Link
          to="/resume-analysis"
          onClick={this.handleBack}
        >
          Back
        </Link>
      </div>
    );
  }
}
