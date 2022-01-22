import React, { Component } from 'react';
import Select from 'react-select';
import * as d3 from 'd3';
import skill_search_pic from '../skill_search_pic.png';
import Loader from 'react-loader-spinner';

const options = [
    {
        label: "Data Engineering",
        options: [
            { value: 'data_analyst', label: 'Data Analyst' },
            { value: 'data_engineer', label: 'Data Engineer' },
            { value: 'data_scientist', label: 'Data Scientist' },
            { value: 'machine_learning_engineer', label: 'Machine Learning Engineer' },
            { value: 'network_engineer', label: 'Network Engineer' }
        ]
    },
    {
        label: "Financial Engineering",
        options: [
            { value: 'financial_engineer', label: 'Financial Engineer' },
            { value: 'quantitative_analyst', label: 'Quantitative Analyst' },
            { value: 'quantitative_finance', label: 'Quantitative Finance' },
            { value: 'quantitative_research', label: 'Quantitative Research' },
            { value: 'quantitative_trading', label: 'Quantitative Trading' },
            { value: 'technology_analyst', label: 'Technology Analyst' }
        ]
    },
    {
        label: "Hardware and Technical Engineering",
        options: [
            { value: 'automation_engineer', label: 'Automation Engineer' },
            { value: 'computer_hardware_engineer', label: 'Computer Hardware Engineer' },
            { value: 'electrical_engineer', label: 'Electrical Engineer' },
            { value: 'mechanical_engineer', label: 'Mechanical Engineer' },
            { value: 'qa_engineer', label: 'QA Engineer' },
            { value: 'systems_engineer', label: 'Systems Engineer' },
        ]
    },
    {
        label: "Software Engineering",
        options: [
            { value: 'software_engineer', label: 'Software Engineer' }
        ]
    }
];

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
            bottomAxisGroup: null,
            leftAxis: null,
            leftAxisGroup: null,

            skills: [],
            score: 0,

            loading: false,

            proxy: 'https://jaut.herokuapp.com'

        }
        this.ref = React.createRef()
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(this.state.selectedOption);
    }


    onClick = () => {
        console.log(this.state.selectedOption);
        this.getSkills(this.state.selectedOption.value);
        d3.select('.skill-search_pic').style('display', 'none');

    }

    getSkills(keyword) {
        this.setState({ loading: true }, () => {
            d3.select('.graph').style('display', 'none');
            fetch(this.state.proxy + '/skills?keyword=' + keyword).then(res => res.json()).then(output => {
                this.setState({
                    loading: false,
                    skills: output.output
                });
                console.log("OUTPUT: ", output)
                d3.select('.graph').style('display', 'inline');
                d3.select('.results').text('The most commonly requested communication skills for this job are: ');
                // d3.select('.sidenote').text('**numbers represent how many times each skill appears in our collection of job ads');
                d3.select('.sidenote').style('display', 'inline')
                d3.select('.next_steps').style('display', 'inline');
                this.drawChart();
                window.scrollTo(0, document.body.scrollHeight);
            })
        })
    }

    // ///////////////
    // getRandomInt = () => {
    //     return Math.floor(Math.random() * 10);
    // }

    // onClick2 = () => {
    //     this.setState({ data: { "skill5": this.getRandomInt(), "skill6": this.getRandomInt(), "skill7": this.getRandomInt(), "skill8": this.getRandomInt(), "skill9": this.getRandomInt() } })
    //     console.log(this.state.data)
    //     // var svg = d3.select(this.ref.current)
    //     // svg.style('display', 'none');
    // }
    // ///////////////

    componentDidMount = () => {

        this.state.svg = d3.select(this.ref.current)
            .append('svg')
            .attr("class", "graph")
            .attr('width', 800)
            .attr('height', 350)
            .style('display', 'none');

        d3.select('.next_steps').style('display', 'none');
        d3.select('.sidenote').style('display', 'none');

        const width = this.state.svg.attr('width');
        const height = this.state.svg.attr('height');

        const margin = { top: 0, right: 10, bottom: 10, left: 200 };
        this.setState({ chartWidth: width - margin.left - margin.right });
        this.setState({ chartHeight: height - margin.top - margin.bottom });

        const annotations = this.state.svg.append("g").attr("id", "annotations");
        this.setState({
            chartArea: this.state.svg.append("g").attr("id", "chart")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        });

        this.setState({ bottomAxis: d3.axisBottom() });
        this.setState({
            bottomAxisGroup: annotations.append("g")
                .attr("class", "x axis")
                .attr("transform", `translate(${margin.left},${300 + margin.top})`)
        });

        this.setState({ leftAxis: d3.axisLeft() });
        this.setState({
            leftAxisGroup: annotations.append("g")
                .attr("class", "y axis")
                .attr("transform", `translate(${margin.left - 10},${margin.top})`)
        });

    }

    drawChart = () => {
        console.log("SKILLS!!!")
        console.log(this.state.skills)
        var res = []
        var i = 1.1
        console.log("ENTRIES!!!")
        var entries = Object.entries(this.state.skills);
        // console.log(entries);
        console.log(entries.sort(function (a, b) { return b[1] - a[1] }));

        var count = 0;
        // for (const [key, value] of Object.entries(this.state.skills)) {
        for (const [key, value] of entries) {
            if (count >= 5) {
                break;
            }
            var val = value;
            var label = value;
            if (value > 200) {
                val = 200;
                label = 'over 200 (' + value + ')';
            }
            i = i - .15
            res.push({
                'skill': key,
                'frequency': val,
                'opacity': i,
                'label': label
            })
            count = count + 1;
        }


        const skillExtent = d3.map(res, d => d.skill)

        const frequencyExtent = [0, d3.max(res, d => d.frequency)]

        const skillScale = d3.scaleBand().domain(skillExtent).range([0, this.state.chartHeight])
            .padding(0.05);


        this.state.leftAxis.scale(skillScale).tickSize(0);
        this.state.leftAxisGroup.transition().call(this.state.leftAxis);

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
                .attr("x", d => {
                    if (frequencyScale(d.frequency) <= 25) {
                        return frequencyScale(d.frequency) + 15;
                    }
                    else {
                        return frequencyScale(d.frequency) - 10;
                    }
                })
                .attr('y', d => skillScale(d.skill) + skillScale.bandwidth() / 2 + 5)
                .attr('fill', d => {
                    if (d.frequency === 200) {
                        return 'red';
                    }
                    else {
                        return '#027A8B';
                    }
                })
                .text(d => {
                    if (d.frequency === 0) { return ""; }
                    else { return d.label; }
                }),
                update => update.call(update => update.transition()
                    .attr('class', 'label')
                    .attr("text-anchor", "end")
                    .attr("font-size", "15px")
                    .attr("x", d => {
                        if (frequencyScale(d.frequency) <= 25) {
                            return frequencyScale(d.frequency) + 15;
                        }
                        else {
                            return frequencyScale(d.frequency) - 10;
                        }
                    })
                    .attr('y', d => skillScale(d.skill) + skillScale.bandwidth() / 2 + 5)
                    .attr('fill', d => {
                        if (d.frequency === 200) {
                            return 'red';
                        }
                        else {
                            return '#027A8B';
                        }
                    })
                    .text(d => {
                        if (d.frequency === 0) { return ""; }
                        else { return d.label; }
                    })));
    }

    render() {
        console.log(this.state);

        return (
            <div className="skill-search-container">
                <div className="header">
                    <h1 className="title">Select an engineering job you're interested in!</h1>
                    <p>
                        Choose from our selection of 18 engineering job titles in 4 different categories, and we'll show you the
                        most commonly requested communication skills for that job based on our database of job ads.
                        Use the search bar below to begin!
                    </p>
                </div>
                <div className="skill-search">
                    <Select className="searchbar" options={options} isClearable={true} onChange={this.handleChange} />
                    <button type="button" class="btn btn-outline-primary" onClick={this.onClick} disabled={!this.state.selectedOption}
                    >Search</button>
                </div>
                {/* <button className="change1" onClick={this.onClick2}>change1</button> */}
                <center><img src={skill_search_pic} className="skill-search_pic" alt="skill search picture" /></center>
                {this.state.loading ? <Loader type="ThreeDots" color="#027A8B" height="100" width="100" /> : <p className="results"></p>}
                <div className="chart" ref={this.ref} />
                {this.state.loading ? <p className="sidenote"></p> : <p className="sidenote">**numbers represent how many times each skill appears in our collection of job ads</p>}
                {this.state.loading ?
                    <div className="next_steps" id="page" /> :
                    <div className="next_steps" id="page" >
                        <h3>Next Steps</h3>
                        <p className="recommendations">Based on these results, you can focus on improving these skills to increase your chances of success in this field! Head over to our <a href="./resume-analysis">Resume Analysis</a> page to determine how well your resume demonstrates these communication skills and to see which skills you are lacking in.</p>
                    </div>}
            </div>
        )
    }
}
