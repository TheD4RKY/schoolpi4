import React from "react";
import Style from '/styles/navigation.module.css';
export default function Navigation(){
    return(
        <>
<div className={Style.wrapper}>
    <div className={Style.navigation1}>
        <a href="../rozvrhyzaci"><div className={Style.navigation2}>
        rozvrh_žák</div></a>
        <a href="../rozvrhyzaci"><div className={Style.navigation2}>
        rozvrh_učitel</div></a>
        <a href="../jizdnirady"><div className={Style.navigation2}>
        jízdní_řád</div></a>
        <a href="../rozvrhyzaci"><div className={Style.navigation2}>
        jídelní_lístek</div></a>
    </div>
</div>
        </>
    );
}