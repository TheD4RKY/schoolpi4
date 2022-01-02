import React from "react";
import Grid from "/styles/grid.module.css";
import Jidlo from "./component/jidlo";
import Uppernav from "./component/nav";

export default function Jidelnicek(){
    return(
        <div className={Grid.grid}>
            <Uppernav/>
<Jidlo/>


</div>
    ) 

}