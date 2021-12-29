import React from "react";
import Navigation from "./navigation";
import Clocks from "./clock";
import Image from "next/dist/client/image";
import Grid from "/styles/grid.module.css";

export default function Uppernav(){
return(
<>
        <Navigation />
        <div className={Grid.header}>

            <div><Clocks /></div>
        </div>
        <div className={Grid.logo}>
            <div className={Grid.logoflex}>
                <Image
                    src={"/logo.png"}
                    alt="MeSOS logo"
                    width={"210px"}
                    height={"60px"}
                />
            </div>
        </div>
        <div className={Grid.adminpanel}></div>
        </>
)
}