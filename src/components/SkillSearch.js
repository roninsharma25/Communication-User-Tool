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
            skills: [],
            score: 0
            // fade: false
        }
        this.ref = React.createRef()
        this.data = [100, 200, 300, 400, 500]
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

    getSkills( keyword ) {
        fetch('/skills?keyword=' + keyword).then(res => res.json()).then(output => {
            this.setState({skills: output});
        })
    }

    getScore ( keyword , resume = null) {
        let str = '/score?keyword=' + keyword ? resume : '/score?keyword=' + keyword + '&resume=' + resume;;
  
        fetch(str).then(res => res.json()).then(output => {
            this.setState({score: output.score})
            this.setState({skills: output.skills})
        })
    }

    drawChart = () => {
        const size = 400
        // const svg = d3.select('svg') ? d3.select(this.ref.current) : d3.select(this.ref.current).append('svg')
        //     .class("graph")
        //     .attr('width', size).attr('height', size);

        if (this.state.chartExists) {
            console.log("exists");
            var svg = d3.select(this.ref.current);
        }
        else {
            console.log("does not exist");
            var svg = d3.select(this.ref.current)
                .append('svg')
                .attr("class", "graph")
                .attr('width', size)
                .attr('height', size);
        }

        this.setState({ chartExists: true })

        const rectWidth = 95
        svg.selectAll('rect')
            .data(this.data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => 5 + i * (rectWidth + 5))
            .attr('y', (d) => size - d)
            .attr('width', rectWidth)
            .attr('height', (d) => d)
            .attr('fill', 'tomato')
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