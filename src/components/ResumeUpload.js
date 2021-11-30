import React, { Component } from "react";
import Select from "react-select";
import upload from "../images/upload.png";

export default class ResumeUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
    };
  }

  render() {
    return (
      <div className="resume-upload">
        <p className="upload-resume-text">
          <b>Step 1:</b> Upload Your Resume
        </p>
        <p className="resume-small-text">file in .pdf</p>
        <input
          type="file"
          name="file"
          onChange={(e) => this.props.setFile(e.target.files[0])}
          value={this.state.selectedFile}
          accept=".pdf"
          // style={{display:'none'}}
        />
        <p>
          <b>Browse</b> to Upload
        </p>
      </div>
    );
  }
}
