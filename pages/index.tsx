import type { NextPage } from 'next';
import Clocks from './component/clock';
import Rozvrh from './component/rozvrh';
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('./component/pdfviewer'), {
  ssr: false
});
export default function index(){
  return (
    <>
 <h1>Hello world</h1>
  <Clocks />
  <Rozvrh />
</>
  );
}
