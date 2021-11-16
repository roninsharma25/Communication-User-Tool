import React, { Component } from 'react';
import Select from 'react-select';
import * as d3 from 'd3';

const options = [
    { value: 'automation_engineer', label: 'Automation Engineer' },
    { value: 'computer_hardware_engineer', label: 'Computer Hardware Engineer' },
    { value: 'data_analyst', label: 'Data Analyst' },
    { value: 'data_engineer', label: 'Data Engineer' },
    { value: 'data_scientist', label: 'Data Scientist' },
    { value: 'electrical_engineer', label: 'Electrical Engineer' },
    { value: 'financial_engineer', label: 'Financial Engineer' },
    { value: 'machine_learning_engineer', label: 'Machine Learning Engineer' },
    { value: 'mechanical_engineer', label: 'Mechanical Engineer' },
    { value: 'network_engineer', label: 'Network Engineer' },
    { value: 'qa_engineer', label: 'QA Engineer' },
    { value: 'quantitative_analyst', label: 'Quantitative Analyst' },
    { value: 'quantitative_finance', label: 'Quantitative Finance' },
    { value: 'quantitative_research', label: 'Quantitative Research' },
    { value: 'quantitative_trading', label: 'Quantitative Trading' },
    { value: 'software_engineer', label: 'Software Engineer' },
    { value: 'systems_engineer', label: 'Systems Engineer' },
    { value: 'technology_analyst', label: 'Technology Analyst' }
]

export default class SkillSearch extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: null,
            chartExists: false,
            // fade: false
            // data: { "skill1": 5, "skill2": 8 }

        }
        this.ref = React.createRef()
        // this.data = [100, 200, 300, 400, 500]
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(this.state.selectedOption);
    }


    onClick = () => {
        console.log(this.state.selectedOption);
        this.setState({ fade: true });
        this.drawChart();
    }

    drawChart = () => {
        // d3.json(this.state.data).then(data => {
        //     const size = 400
        //     // const svg = d3.select('svg') ? d3.select(this.ref.current) : d3.select(this.ref.current).append('svg')
        //     //     .class("graph")
        //     //     .attr('width', size).attr('height', size);

        //     if (this.state.chartExists) {
        //         console.log("exists");
        //         var svg = d3.select(this.ref.current);
        //     }
        //     else {
        //         console.log("does not exist");
        //         var svg = d3.select(this.ref.current)
        //             .append('svg')
        //             .attr("class", "graph")
        //             .attr('width', size)
        //             .attr('height', size);
        //     }

        //     this.setState({ chartExists: true })

        //     // const rectWidth = 95
        //     // svg.selectAll('rect')
        //     //     .data(this.data)
        //     //     .enter()
        //     //     .append('rect')
        //     //     .attr('x', (d, i) => 5 + i * (rectWidth + 5))
        //     //     .attr('y', (d) => size - d)
        //     //     .attr('width', rectWidth)
        //     //     .attr('height', (d) => d)
        //     //     .attr('fill', 'tomato')

        //     this.state.data.forEach(d => {
        //         // d['points'] = Number(d['points']);
        //         // d['price'] = Number(d['price'].replace(/,/g, "").replace(/\$/g, ""));
        //         console.log(d);
        //     });

        //     // const width = svg.attr("width");
        //     // const height = svg.attr("height");

        //     // const margin = { top: 20, right: 10, bottom: 30, left: 35 };
        //     // const chartWidth = width - margin.left - margin.right;
        //     // const chartHeight = height - margin.top - margin.bottom;

        //     // let chartArea = svg.append("g").attr("id", "chart")
        //     //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        //     // const priceExtent = d3.extent(data, d => d['price']);
        //     // const priceScale = d3.scaleLinear().domain(priceExtent).nice().range([0, chartWidth]);
        //     // const pointsExtent = d3.extent(data, d => d['points']);
        //     // const pointsScale = d3.scaleLinear().domain(pointsExtent).range([chartHeight, 0]);
        //     // const stateScale = d3.scaleOrdinal(d3.schemeCategory10);

        //     // let yAxis = d3.axisLeft(pointsScale);
        //     // let yGridlines = d3.axisLeft(pointsScale).tickFormat("").tickSize(-chartWidth - 10);

        //     // svg.append("g").attr("class", "y axis")
        //     //     .attr("transform", "translate(" + (margin.left - 10) + "," + (margin.top) + ")")
        //     //     .call(yAxis)

        //     // svg.append("g").attr("class", "y gridlines")
        //     //     .attr("transform", "translate(" + (margin.left - 10) + "," + (margin.top) + ")")
        //     //     .call(yGridlines)

        //     // let xAxis = d3.axisBottom(priceScale).tickFormat(d3.format("$"));
        //     // let xGridlines = d3.axisBottom(priceScale).tickFormat("").tickSize(-chartHeight - 10);

        //     // svg.append("g").attr("class", "x axis")
        //     //     .attr("transform", "translate(" + (margin.left - 10) + "," + (margin.top + chartHeight + 10) + ")")
        //     //     .call(xAxis)

        //     // svg.append("g").attr("class", "x gridlines")
        //     //     .attr("transform", "translate(" + (margin.left - 10) + "," + (margin.top + chartHeight + 10) + ")")
        //     //     .call(xGridlines)

        //     // d3.select(".axis").raise()
        // });



    }

    render() {
        // const fade = this.state.fade;

        return (
            <div className="skill-search-container" >
                <h1 className="title">Search for jobs you're interested in!</h1>
                <div className="skill-search">
                    <Select className="searchbar" options={options} isClearable={true} onChange={this.handleChange} />
                    <button type="button" class="btn btn-outline-primary" onClick={this.onClick} disabled={!this.state.selectedOption}
                    // onAnimationEnd={() => this.setState({ fade: false })}
                    // className={fade ? 'fade' : ''}
                    >Search</button>
                </div>
                <div className="chart" ref={this.ref} />
            </div>
        )
    }
}