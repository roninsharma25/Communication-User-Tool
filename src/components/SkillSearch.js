import React, { Component } from 'react';
import Select from 'react-select';

const options = [
    { value: 'software_engineer', label: 'Software Engineer' },
    { value: 'mechanical_engineer', label: 'Mechanical Engineer' },
    { value: 'data_scientist', label: 'Data Scientist' }
]

export default class SkillSearch extends Component {
    state = {
        selectedOption: null,
        fade: false
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(this.state.selectedOption);
        // document.write(`Option selected:`, selectedOption.value); //this prints the selected option
    }


    onClick = () => {
        console.log(this.state.selectedOption);
        this.setState({ fade: true })
    }

    render() {
        const fade = this.state.fade

        return (
            <div className="skill-search" >
                <h1 className="title">Search for jobs you're interested in!</h1>
                <Select className="searchbar" options={options} isClearable={true} onChange={this.handleChange} />
                <button type="button" class="btn btn-outline-primary" onClick={this.onClick}
                // onAnimationEnd={() => this.setState({ fade: false })}
                // className={fade ? 'fade' : ''}
                >Search</button>
            </div>
        )
    }
}