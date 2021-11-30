import React, { Component } from "react";
import ReadinessScore from "./ReadinessScore";
import { Link } from "react-router-dom";
import * as d3 from "d3";
import back_arrow from "../images/back-arrow.png";

export default class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      chartExists: false,
      svg: null,
      chartWidth: null,
      chartHeight: null,
      chartArea: null,
      bottomAxis: null,
      bottomAxisG: null,
      leftAxis: null,
      leftAxisG: null,

      getColor: true,

      score: -1,
    };

    this.ref = React.createRef();

    this.handleBack = this.handleBack.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  getRandomInt = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  onClick = () => {
    this.setState(
      {
        data: {
          skill1: [this.getRandomInt(), this.getRandomInt()],
          skill2: [this.getRandomInt(), this.getRandomInt()],
          skill3: [this.getRandomInt(), this.getRandomInt()],
          skill3: [this.getRandomInt(), this.getRandomInt()],
          skill4: [this.getRandomInt(), this.getRandomInt()],
          skill5: [this.getRandomInt(), this.getRandomInt()],
          skill6: [this.getRandomInt(), this.getRandomInt()],
          skill7: [this.getRandomInt(), this.getRandomInt()],
          skill8: [this.getRandomInt(), this.getRandomInt()],
        },
      },
      () => {
        console.log(this.state.data);
        d3.select(".graph").style("display", "inline");
        this.drawChart();
      }
    );
  };

  componentDidMount = () => {
    this.state.svg = d3
      .select(this.ref.current)
      .append("svg")
      .attr("class", "graph")
      .attr("width", 800)
      .attr("height", 500)
      .style("display", "none");

    const width = this.state.svg.attr("width");
    const height = this.state.svg.attr("height");

    const margin = { top: 20, right: 70, bottom: 40, left: 100 };
    this.setState({ chartWidth: width - margin.left - margin.right });
    this.setState({ chartHeight: height - margin.top - margin.bottom });

    const annotations = this.state.svg.append("g").attr("id", "annotations");
    this.setState({
      chartArea: this.state.svg
        .append("g")
        .attr("id", "chart")
        .attr("transform", `translate(${margin.left},${margin.top})`),
    });

    this.setState({ bottomAxis: d3.axisBottom() });
    this.setState({
      bottomAxisG: annotations
        .append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(${margin.left},${300 + margin.top})`),
    });

    this.setState({ leftAxis: d3.axisLeft() });
    this.setState({
      leftAxisG: annotations
        .append("g")
        .attr("class", "y axis")
        .attr("transform", `translate(${margin.left - 10},${margin.top})`),
    });
  };

  drawChart = () => {
    var res = [];
    var i = 1.0;
    const col = ["#018588", "#FFC85C"];
    for (const [key, v] of Object.entries(this.state.data)) {
      i = i - 0.1;
      for (var j = 0; j < v.length; j++) {
        res.push({
          skill: key,
          frequency: v[j],
          opacity: i,
          color: col[j],
        });
      }
    }

    const skillExtent = d3.map(res, (d) => d.skill);
    // console.log(skillExtent);

    const frequencyExtent = [0, d3.max(res, (d) => d.frequency)];

    const skillScale = d3
      .scaleBand()
      .domain(skillExtent)
      .range([0, this.state.chartHeight]);

    for (const d of Object.entries(res)) {
      console.log(d.skill);
      console.log(skillScale(d.skill));
    }

    console.log(skillScale);

    this.state.leftAxis.scale(skillScale).tickSize(0);
    this.state.leftAxisG.transition().call(this.state.leftAxis);

    const frequencyScale = d3
      .scaleLinear()
      .domain(frequencyExtent)
      .range([0, this.state.chartWidth]);

    this.state.chartArea
      .selectAll("rect.bar")
      .data(res)
      .join((enter) =>
        enter
          .append("rect")
          .attr("class", "bar")
          .attr("fill", (d) => d.color)
          .attr("x", (d) => 0)
          .attr("y", (d) =>
            d.color === "#018588"
              ? skillScale(d.skill)
              : skillScale(d.skill) + 0.5 * skillScale.bandwidth()
          )
          .attr("width", (d) => frequencyScale(d.frequency))
          .attr("height", 0.5 * skillScale.bandwidth())
          .attr("opacity", (d) => d.opacity)
      );

    this.state.chartArea
      .selectAll("text.label")
      .data(res)
      .join((enter) =>
        enter
          .append("text")
          .attr("class", "label")
          .attr("text-anchor", "end")
          .attr("font-size", "15px")
          .attr("x", (d) => frequencyScale(d.frequency) + 15)
          .attr("y", (d) =>
            d.color === "#018588"
              ? skillScale(d.skill) + skillScale.bandwidth() / 4 + 5
              : skillScale(d.skill) + (3 * skillScale.bandwidth()) / 4 + 5
          )
          .text((d) => {
            if (d.frequency === 0) {
              return "";
            } else {
              return d.frequency;
            }
          })
      );
  };

  handleBack = () => {
    window.location.href = "/resume-analysis";
  };

  render() {
    return (
      <div className="analytics-page">
        <ReadinessScore score="25" className="readiness-score-analytics" />
        <div className="communication-skills-chart-container">
          <h4 className="important-communication-title">
            Most Important Communication Skills:{" "}
          </h4>
          <button onClick={this.onClick}> Test </button>
          <div style={{ alignItems: "left" }}>
            <div className="chart" ref={this.ref} />
          </div>
        </div>
        <div className="back-button">
          <Link
            to="/resume_analysis"
            onClick={this.handleBack}
            className="back-button-text"
          >
            <img src={back_arrow} className="back-arrow-image" />
            Back
          </Link>
        </div>
      </div>
    );
  }
}
