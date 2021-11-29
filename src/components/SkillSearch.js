import React, { Component } from 'react';
import Select from 'react-select';
import * as d3 from 'd3';
import skill_search_pic from '../skill_search_pic.png';

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

            data: { "skill1": 5, "skill2": 8, "skill3": 4, "skill4": 1, "skill5": 9 },

            svg: null,
            chartWidth: null,
            chartHeight: null,
            chartArea: null,
            bottomAxis: null,
            bottomAxisG: null,
            leftAxis: null,
            leftAxisG: null,

            skills: [],
            score: 0
            // fade: false
            // data: { "skill1": 5, "skill2": 8 }

        }
        this.ref = React.createRef()
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(this.state.selectedOption);
    }


    onClick = () => {
        console.log(this.state.selectedOption);
        d3.select('.skill-search_pic').style('display', 'none');
        d3.select('.graph').style('display', 'inline');
        this.drawChart();
    }

    getSkills(keyword) {
        fetch('/skills?keyword=' + keyword).then(res => res.json()).then(output => {
            this.setState({ skills: output });
        })
    }

    getScore(keyword, resume = null) {
        let str = '/score?keyword=' + keyword ? resume : '/score?keyword=' + keyword + '&resume=' + resume;;

        fetch(str).then(res => res.json()).then(output => {
            this.setState({ score: output.score })
            this.setState({ skills: output.skills })
        })
    }

    // ///////////////
    getRandomInt = () => {
        return Math.floor(Math.random() * 10);
    }

    onClick2 = () => {
        this.setState({ data: { "skill5": this.getRandomInt(), "skill6": this.getRandomInt(), "skill7": this.getRandomInt(), "skill8": this.getRandomInt(), "skill9": this.getRandomInt() } })
        console.log(this.state.data)
        // var svg = d3.select(this.ref.current)
        // svg.style('display', 'none');
    }
    // ///////////////

    componentDidMount = () => {

        this.state.svg = d3.select(this.ref.current)
            .append('svg')
            .attr("class", "graph")
            .attr('width', 800)
            .attr('height', 350)
            .style('display', 'none');

        const width = this.state.svg.attr('width');
        const height = this.state.svg.attr('height');

        const margin = { top: 20, right: 10, bottom: 40, left: 100 };
        this.setState({ chartWidth: width - margin.left - margin.right });
        this.setState({ chartHeight: height - margin.top - margin.bottom });

        const annotations = this.state.svg.append("g").attr("id", "annotations");
        this.setState({
            chartArea: this.state.svg.append("g").attr("id", "chart")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        });

        this.setState({ bottomAxis: d3.axisBottom() });
        this.setState({
            bottomAxisG: annotations.append("g")
                .attr("class", "x axis")
                .attr("transform", `translate(${margin.left},${300 + margin.top})`)
        });

        this.setState({ leftAxis: d3.axisLeft() });
        this.setState({
            leftAxisG: annotations.append("g")
                .attr("class", "y axis")
                .attr("transform", `translate(${margin.left - 10},${margin.top})`)
        });

    }

    drawChart = () => {
        var res = []
        var i = 1.1
        for (const [key, value] of Object.entries(this.state.data)) {
            i = i - .15
            res.push({
                'skill': key,
                'frequency': value,
                'opacity': i
            })
        }

        const skillExtent = d3.map(res, d => d.skill)

        const frequencyExtent = [0, d3.max(res, d => d.frequency)]

        const skillScale = d3.scaleBand().domain(skillExtent).range([0, this.state.chartHeight])
            .padding(0.05);


        this.state.leftAxis.scale(skillScale).tickSize(0);
        this.state.leftAxisG.transition().call(this.state.leftAxis);

        const frequencyScale = d3.scaleLinear().domain(frequencyExtent).range([0, this.state.chartWidth]);

        this.state.chartArea.selectAll('rect.bar').data(res)
            .join(enter => enter.append('rect')
                .attr('class', 'bar')
                .attr("fill", "#FFC85C")
                .attr("x", d => 0)
                .attr("y", d => skillScale(d.skill))
                .attr("width", d => frequencyScale(d.frequency))
                .attr("height", skillScale.bandwidth())
                .attr("opacity", d => d.opacity),
                update => update.call(update => update.transition()
                    .attr("fill", "#FFC85C")
                    .attr("x", d => 0)
                    .attr("y", d => skillScale(d.skill))
                    .attr("width", d => frequencyScale(d.frequency))
                    .attr("height", skillScale.bandwidth()))
                    .attr("opacity", d => d.opacity));

        this.state.chartArea.selectAll('text.label').data(res)
            .join(enter => enter.append('text')
                .attr('class', 'label')
                .attr("text-anchor", "end")
                .attr("font-size", "15px")
                .attr("x", d => frequencyScale(d.frequency) - 10)
                .attr('y', d => skillScale(d.skill) + skillScale.bandwidth() / 2 + 5)
                .text(d => {
                    if (d.frequency === 0) { return ""; }
                    else { return d.frequency; }
                }),
                update => update.call(update => update.transition()
                    .attr('class', 'label')
                    .attr("text-anchor", "end")
                    .attr("font-size", "15px")
                    .attr("x", d => frequencyScale(d.frequency) - 10)
                    .attr('y', d => skillScale(d.skill) + skillScale.bandwidth() / 2 + 5)
                    .text(d => {
                        if (d.frequency === 0) { return ""; }
                        else { return d.frequency; }
                    })));
    }

    render() {

        return (
            <div className="skill-search-container" >
                <h1 className="title">Select an engineering job you're interested in!</h1>
                <div className="skill-search">
                    <Select className="searchbar" options={options} isClearable={true} onChange={this.handleChange} />
                    <button type="button" class="btn btn-outline-primary" onClick={this.onClick} disabled={!this.state.selectedOption}
                    >Search</button>
                </div>
                <button className="change1" onClick={this.onClick2}>change1</button>
                <center><img src={skill_search_pic} className="skill-search_pic" alt="skill search picture" /></center>
                <div className="chart" ref={this.ref} />
            </div>
        )
    }
}