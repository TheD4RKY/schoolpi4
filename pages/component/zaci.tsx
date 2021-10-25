import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../../pdf-worker";
import Style from '/styles/rozvrhzaci.module.css';
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function Zaci() {
  const [file, setFile] = useState('./zaci.pdf');
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (

     <div className={Style.wrapper}>
      <div className={Style.pdfwrapper}>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
        </Document>
        </div>
    </div>
  
  );
}