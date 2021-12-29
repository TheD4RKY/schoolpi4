import { useState } from "react";
import { Document, Page, pdfjs} from "react-pdf";
import workerSrc from "../../pdf-worker";
import Style from '/styles/rozvrhzaci.module.css';
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
import Grid from "/styles/grid.module.css";
import Uppernav from "./nav";

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
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              className={Style.funguj}
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              width={550}
            />
          ))}
        </Document>
        </div>
  
  
  );
}