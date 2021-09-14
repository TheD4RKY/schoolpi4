import type { NextPage } from 'next'
import Clocks from './component/clock'
import Rozvrh from './component/rozvrh'


export default function index(){
  return (
    <>
 <h1>Hello world</h1>
  <Clocks />
  <Rozvrh />
</>
  );
}
