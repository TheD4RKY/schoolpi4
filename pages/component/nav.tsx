import React from "react";
import Clocks from "./clock";
import Image from "next/dist/client/image";
import Grid from "/styles/grid.module.css";
import Style from '/styles/navigation.module.css';
import Link from 'next/link';

export default function Uppernav(){
    const DarkMode = {
        backgroundColor: "#212121"
    }
    const LightMode = {
        backgroundColor: "#FAFAFA"
    }
    const defaultmode = {
        backgroundColor: "#725AC1"
    }
return(
<>
        <div className={Style.wrapper} style={defaultmode}>
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