import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Ucitele = dynamic(() => import('./component/ucitele'), {
    ssr: false
});

export default function Rozvrh() {
    return (
        <>
            <Ucitele />
        </>
    );
}