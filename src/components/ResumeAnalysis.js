import { useState } from "react";

import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { Worker } from "@react-pdf-viewer/core";

function ResumeAnalysis() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // for onChange event
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");

  // for submit event
  const [viewPdf, setViewPdf] = useState(null);

  // onChange event
  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFileError("Please select valid pdf file");
        setPdfFile(null);
      }
    } else {
      console.log("select your file");
    }
  };

  // form submit
  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  return (
    <div>
      <h2>Testing Resume Analysis</h2>
      <br></br>
      <div className="container">
        <form className="form-group" onSubmit={handlePdfFileSubmit}>
          <input
            type="file"
            className="form-control"
            required
            onChange={handlePdfFileChange}
          />
          {pdfFileError && <div className="error-msg"> {pdfFileError} </div>}
          <br></br>
          <div
            style={{
              width: 100 + "%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <button type="submit" className="btn btn-success btn-lg">
              Upload
            </button>
          </div>
        </form>
        <br></br>

        <h4>View PDF</h4>
        <div className="pdf-container">
          {viewPdf && (
            <>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={viewPdf}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </>
          )}
          {!viewPdf && <>No pdf file selected</>}
        </div>
      </div>
    </div>
  );
}
export default ResumeAnalysis;
