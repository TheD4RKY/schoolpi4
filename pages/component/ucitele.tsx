import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../../pdf-worker";
import Style from "/styles/rozvrhzaci.module.css";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';
import CopyWebpackPlugin from 'copy-webpack-plugin';


export default function Ucitele() {
  const [file, setFile] = useState('./ucitele.pdf');
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  
  }

  return (
      <div className={Style.wrapperalt}>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}
        renderMode="canvas"
         >
            <Page
              className={Style.funguj}
              pageNumber={1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              width={550}
            />
        </Document>
      </div>
  );
}