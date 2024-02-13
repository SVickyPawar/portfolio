import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Vivek_Pawar_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

//const resumeLink =  "https://github.com/SVickyPawar/resume/blob/main/Vivek_Pawar_resume.pdf";
const resumeLink = "https://raw.githubusercontent.com/SVickyPawar/resume/main/Vivek_Pawar_resume.pdf";
//const resumeLink =  "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";
  // "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);


  const handleDownload = () => {
    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = resumeLink;
    anchor.download = 'Vivek_Pawar_resume.pdf';
    anchor.click();
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div id="resume">
      <Container fluid className="resume-section">
        <Particle />
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />&nbsp;
            Resume
          </Button>
        </Row> */}

         <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.4 : 0.6} />
          </Document>
        </Row>  

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            // onClick={handleDownload}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row> 
      </Container>
    </div>
  );
}

export default ResumeNew;
