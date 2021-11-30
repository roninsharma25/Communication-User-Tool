import React from "react";
import upload from "../images/upload.png";

const ResumeUpload = (props) => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.setFile(fileUploaded);
  };

  return (
    <div >
      <p className="upload-resume-text">
        <b>Step 1:</b> Upload Your Resume
      </p>
      <p className="resume-small-text">file in .pdf</p>
      <div
        for="file-upload"
        onClick={handleClick}
        className="custom-file-upload"
      >
        <img src={upload} className="upload-image" />
        <p className="browse-text">
          <b>Browse</b> to Upload
        </p>
      </div>

      <input
        id="file-upload"
        type="file"
        name="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        accept=".pdf"
      />
    </div>
  );
};

export default ResumeUpload;
