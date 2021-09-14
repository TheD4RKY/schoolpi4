import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("./pdfviewer"), {
  ssr: false
});

export default function PDF() {
  return <PDFViewer />;
}

