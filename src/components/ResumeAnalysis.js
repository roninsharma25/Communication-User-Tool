import React, { Component } from "react";
import Select from "react-select";
import ResumeUpload from "./ResumeUpload";
import Analytics from "./Analytics";
import { Link } from "react-router-dom";

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

export default class ResumeAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCompareOption: null,
      fileChosen: false,
      titleChosen: false,
      descChosen: false,
      description: null,
      selectedTitle: null,
      selectedFile: null,
    };

    this.fileHandler = this.fileHandler.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleTitleChosen = this.handleTitleChosen.bind(this);
    this.handleDescInput = this.handleDescInput.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleSubmission = (e) => {
    console.log("HANDLING SUBMISSION");
    e.preventDefault();
    if (!this.state.titleChosen && !this.state.descChosen) {
      alert(
        "Please choose whether you would like to compare a Job Title or Job Description"
      );
      return;
    } else if (this.state.titleChosen) {
      if (this.state.selectedTitle !== null) {
        if (this.state.fileChosen) {
          console.log("Title: " + this.state.selectedTitle.label);

          // Get file object working
          console.log(typeof(this.state.selectedFile));
          console.log(this.state.selectedFile);

          let selectedJobTitle = '';
          let label = this.state.selectedTitle.label;
          jobTitleOptions.forEach( jobTitle => {
            if (jobTitle.label == label) selectedJobTitle = jobTitle.value;
          })
          let resumeStem = this.state.selectedFile.name.split(".")[0];
          console.log(resumeStem);
          console.log(typeof(resumeStem));
          let str = '/resume_analysis?keyword=' + selectedJobTitle + '&resume=' + resumeStem;
          console.log("STR: ", str);

          fetch(str).then(res => res.json()).then(output => {
              console.log("RESUME OUTPUT:", output)
          })


          //window.location.href = "/analytics";
        } else {
          alert("Please upload a file");
        }
      } else {
        alert("Please select a job title");
      }
    } else if (this.state.descChosen) {
      if (this.state.description !== null && this.state.description !== "") {
        if (this.state.fileChosen) {
          console.log("Description: " + this.state.description);
          //window.location.href = "/analytics";
        } else {
          alert("Please upload a file");
        }
      } else {
        alert("Please enter a description");
      }
    }
    return;
  };

  fileHandler = () => {
    if (this.state.selectedFile) {
      this.setState({ fileChosen: true }, () => {
        console.log(this.state.selectedFile);
        var read = new FileReader();
        read.readAsText(this.state.selectedFile);
        read.onloadend = () => {
          console.log(read.result);
        };

        console.log("YES file chosen");
        // alert("TODO");
      });
    } else {
      this.setState({ fileChosen: false }, () => {
        console.log("no file chosen");
      });
    }
  };

  setSelectedFile = (file) => {
    this.setState({ selectedFile: file }, () => {
      this.fileHandler();
    });
  };

  handleSearchChange = (selectedOption) => {
    this.setState({ selectedCompareOption: selectedOption }, () => {
      if (this.state.selectedCompareOption !== null) {
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

  render() {
    return (
      <div>
        <h1 className="title">Evaluate and Improve Your Resume</h1>
        <div className="resume-upload">
          <ResumeUpload setFile={this.setSelectedFile} />
          {this.state.fileChosen && (
            <label className="file-uploaded-text">
              File Successfully Uploaded
            </label>
          )}
        </div>

        <div className="job-info">
          <h4 className="job-info-text">
            <b>Step 2: </b>Compare with{" "}
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
                  className="searchbar"
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
          <Link
            to="/analytics"
            onClick={this.handleSubmission}
            className="start-button"
          >
            Start
          </Link>
        </div>
      </div>
    );
  }
}
