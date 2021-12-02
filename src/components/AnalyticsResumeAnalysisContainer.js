import React, { Component } from "react";
import Select from "react-select";
// import ResumeAnalysis from "./ResumeAnalysis";
import Analytics from "./Analytics";

const jobInfoOptions = [
  { value: "job_title", label: "Job Title" },
  { value: "job_description", label: "Job Description" },
];

const jobTitleOptions = [
  { value: "automation_engineer", label: "Automation Engineer" },
  { value: "computer_hardware_engineer", label: "Computer Hardware Engineer" },
  { value: "data_analyst", label: "Data Analyst" },
  { value: "data_engineer", label: "Data Engineer" },
  { value: "data_scientist", label: "Data Scientist" },
  { value: "electrical_engineer", label: "Electrical Engineer" },
  { value: "financial_engineer", label: "Financial Engineer" },
  { value: "machine_learning_engineer", label: "Machine Learning Engineer" },
  { value: "mechanical_engineer", label: "Mechanical Engineer" },
  { value: "network_engineer", label: "Network Engineer" },
  { value: "qa_engineer", label: "QA Engineer" },
  { value: "quantitative_analyst", label: "Quantitative Analyst" },
  { value: "quantitative_finance", label: "Quantitative Finance" },
  { value: "quantitative_research", label: "Quantitative Research" },
  { value: "quantitative_trading", label: "Quantitative Trading" },
  { value: "software_engineer", label: "Software Engineer" },
  { value: "systems_engineer", label: "Systems Engineer" },
  { value: "technology_analyst", label: "Technology Analyst" },
];

export default class AnalyticsResumeAnalysisContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      analyticsPage: false,
      selectedCompareOption: null,
      titleChosen: false,
      descChosen: false,
      description: null,
      selectedTitle: null,
      resumeText: null,
      resumeEntered: false,
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

      isExploding: true,
      score: 0,
      getColor: true,
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleTitleChosen = this.handleTitleChosen.bind(this);
    this.handleDescInput = this.handleDescInput.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleResumeInput = this.handleResumeInput.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.goToAnalyticsPage = this.goToAnalyticsPage.bind(this);
  }

  getRandomInt = () => {
    return Math.floor(Math.random() * 100);
  };

  goToAnalyticsPage = () => {
    this.setState({ analyticsPage: true }, () => {
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
          this.setState({ score: this.getRandomInt() }, () => {
            console.log(this.state.score);
          });
        }
      );
    });
    document.getElementById("resume-input").value = "";
    console.log(this.state.data);
    console.log(this.state.score);
  };

  handleSubmission = (e) => {
    e.preventDefault();
    if (!this.state.titleChosen && !this.state.descChosen) {
      alert(
        "Please choose whether you would like to compare a Job Title or Job Description"
      );
      return;
    } else if (this.state.titleChosen) {
      if (this.state.selectedTitle) {
        if (this.state.resumeEntered) {
          console.log("Title: " + this.state.selectedTitle.label);

          let title = this.state.selectedTitle.value;
          // make backend call connection here TODODOOOOO
          this.goToAnalyticsPage();
        } else {
          alert("Please copy and paste your resume");
        }
      } else {
        alert("Please select a job title");
      }
    } else if (this.state.descChosen) {
      if (this.state.description !== null && this.state.description !== "") {
        if (this.state.resumeEntered) {
          console.log("Description: " + this.state.description);

          this.goToAnalyticsPage();
          document.getElementById("resume-input").value = "";
        } else {
          alert("Please copy and paste your resume");
        }
      } else {
        alert("Please enter a description");
      }
    }
    return;
  };

  handleSearchChange = (selectedOption) => {
    this.setState({ selectedCompareOption: selectedOption }, () => {
      if (this.state.selectedCompareOption) {
        if (selectedOption.value === "job_title") {
          this.setState({ titleChosen: true, descChosen: false });
        } else if (selectedOption.value === "job_description") {
          this.setState({ titleChosen: false, descChosen: true });
        }
        console.log(this.state.selectedCompareOption);
      } else {
        this.setState({ titleChosen: false, descChosen: false }, () => {
          console.log(this.state.selectedCompareOption);
        });
      }
    });
  };

  handleTitleChosen = (selectedOption) => {
    this.setState({ selectedTitle: selectedOption }, () => {
      if (this.state.selectedTitle !== null) {
        console.log(this.state.selectedTitle.label);
      }
    });
  };

  handleDescInput = (e) => {
    this.setState({ description: e.target.value }, () => {
      if (this.state.description !== null) {
        console.log(this.state.description);
      }
    });
  };

  handleResumeInput = (e) => {
    console.log(e.target.value);
    this.setState({ resumeText: e.target.value }, () => {
      if (this.state.resumeText) {
        console.log(this.state.resumeText);
        if (this.state.resumeText === "") {
          this.setState({ resumeEntered: false });
        } else {
          this.setState({ resumeEntered: true });
        }
      } else {
        this.setState({ resumeEntered: false });
      }
    });
  };

  handleBack = () => {
    this.setState({ analyticsPage: false }, () => {
      console.log(this.state.analyticsPage);
    });
  };

  render() {
    return (
      <div>
        {!this.state.analyticsPage && (
          <div>
            <h1 className="title">Evaluate and Improve Your Resume</h1>
            <div className="resume-upload">
              <div>
                <p className="upload-resume-text">
                  <b>Step 1:</b> Copy and Paste Your Resume
                </p>
                <textarea
                  className="resume-text-area "
                  id="resume-input"
                  placeHolder="Please enter your resume here..."
                  onChange={this.handleResumeInput}
                  cols="60"
                  rows="7"
                />
              </div>
            </div>

            <div className="job-info">
              <h4 className="job-info-text">
                <b>Step 2: </b>Compare with{"   "}
              </h4>
              <Select
                className="job-info-searchbar"
                options={jobInfoOptions}
                isClearable={true}
                onChange={this.handleSearchChange}
                placeholder="Select job information"
              />
              <div>
                {this.state.titleChosen && (
                  <div>
                    <br></br>
                    <Select
                      className="job-info-title-searchbar"
                      options={jobTitleOptions}
                      isClearable={true}
                      onChange={this.handleTitleChosen}
                      placeholder="Select a job title"
                    />
                  </div>
                )}
                {this.state.descChosen && (
                  <div>
                    <br></br>
                    <textarea
                      className="description-text-area"
                      placeHolder="Please enter job description here..."
                      onChange={this.handleDescInput}
                      cols="60"
                      rows="7"
                    />
                  </div>
                )}
              </div>
            </div>
            <div>
              <br></br>
              <button
                to="/analytics"
                onClick={this.handleSubmission}
                className="start-button"
              >
                Start
              </button>
            </div>
          </div>
        )}
        {this.state.analyticsPage && (
          <Analytics
            data={this.state.data}
            handleBack={this.handleBack}
            score={this.state.score}
          />
        )}
      </div>
    );
  }
}
