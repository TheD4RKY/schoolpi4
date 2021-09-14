import type { NextPage } from 'next';
import Clocks from './component/clock';
import dynamic from 'next/dynamic';
import Ucitele from './component/ucitele';

const Zaci = dynamic(() => import('./component/zaci'), {
  ssr: false
});
export default function index(){
  return (
    <>
 <h1>Hello world</h1>
  <Clocks />
  <Zaci />
  <Ucitele />
</>
  );
}
