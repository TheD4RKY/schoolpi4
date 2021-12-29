import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Ucitele from './component/ucitele';
import Style from '/styles/rozvrhzaci.module.css';
import Grid from "/styles/grid.module.css";
import Uppernav from './component/nav';


export default function Rozvrh(){
    const Zaci = dynamic(() => import('./component/zaci'), {
        ssr: false
    });
    const Ucitele = dynamic(() => import('./component/ucitele'), {
        ssr: false
    });
return(
    <div className={Grid.grid}>
        <Uppernav />
        <Zaci />
        <Ucitele />
        </div>
);
}