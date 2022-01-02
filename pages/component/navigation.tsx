import React from "react";
import Style from '/styles/navigation.module.css';
import Link from 'next/link';
export default function Navigation(){
    return(
        <>
<div className={Style.wrapper}>
    <div className={Style.navigation1}>
        <Link href="../rozvrhyzaci"><div className={Style.navigation2}>
        Rozvrh</div></Link>
        <Link href="../rozvrhyzaci"><div className={Style.navigation2}>
        Funny</div></Link>
        <Link href="../jizdnirady"><div className={Style.navigation2}>
        Jízdní řád</div></Link>
        <Link href="../jidelnicek"><div className={Style.navigation2}>
        Jídelníček</div></Link>
    </div>
</div>
        </>
    );
}