import React from "react";
import Style from '/styles/navigation.module.css';
export default function Navigation(){
    return(
        <>
        <nav className={Style.wrapper}>
           <ul>
                <li className={Style.navigation1}>
                    <a href="../rozvrhyzaci">Rozvrh staly a zmeny</a></li>
                <li className={Style.navigation1}>
                    <a href="../rozvrhyucitele">Rozvrh Ucitele</a></li>
                <li className={Style.navigation1}>
                    <a href="./jizdnirady">Jizdni rad</a></li>
                <li className={Style.navigation1}>
                    <a href="#">Jidelnicek</a></li>
           </ul>
        </nav>
        </>
    );
}