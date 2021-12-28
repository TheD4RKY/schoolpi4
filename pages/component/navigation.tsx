import React from "react";
import Style from '/styles/navigation.module.css';
export default function Navigation(){
    return(
        <>
<div className={Style.wrapper}>
    <div className={Style.navigation1}>
        <a href="../rozvrhyzaci"><div className={Style.navigation2}>
        Rozvrh</div></a>
        <a href="../rozvrhyzaci"><div className={Style.navigation2}>
        Rozvrh</div></a>
        <a href="../jizdnirady"><div className={Style.navigation2}>
        Jízdní řád</div></a>
        <a href="../rozvrhyzaci"><div className={Style.navigation2}>
        Jídelníček</div></a>
    </div>
</div>
        </>
    );
}