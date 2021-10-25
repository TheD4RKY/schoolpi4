import React from "react";
import Style from '/styles/navigation.module.css';
export default function Navigation(){
    return(
        <>
<div className={Style.wrapper}>
    <div className={Style.navigation1}>
        <a href="../rozvrhyzaci"><div className={Style.navigation2}>
        Rozvrh staly a zmeny</div></a>
        <a href="../rozvrhyzaci"><div className={Style.navigation2}>
        Rozvrh Ucitele</div></a>
        <a href="../jizdnirady"><div className={Style.navigation2}>
        Jizdni rad</div></a>
        <a href="../rozvrhyzaci"><div className={Style.navigation2}>
        Jidelnicek</div></a>
    </div>
</div>
        </>
    );
}