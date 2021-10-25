import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Style from '/styles/rozvrhzaci.module.css';



export default function Rozvrh(){
    const Zaci = dynamic(() => import('./component/zaci'), {
        ssr: false
    });
return(
<div>
        <Zaci />
        </div>
);
}