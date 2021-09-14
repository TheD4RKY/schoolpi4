import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Zaci = dynamic(() => import('./component/zaci'), {
    ssr: false
});

export default function Rozvrh(){
return(
<>
        <Zaci />
</>
);
}