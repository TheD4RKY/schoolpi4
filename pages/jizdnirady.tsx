import React from "react";
import Image from 'next/image';
import Navigation from "./component/navigation";
import Style from '/styles/idos.module.css';
import Grid from "/styles/grid.module.css";
import Clocks from "./component/clock";
export const getStaticProps = async () => {
    const res = await fetch('https://www.idsjmk.cz/api/departures/busstop-by-name?busStopName=Klobouky%20u%20Brna%2C%20n%C3%A1m%C4%9Bst%C3%AD');
    const data = await res.json();
    var array = [];
    array = data.stops[0].signs;
    for(let init = 0;init < array.length; init++){
        array[init];
    }
    return {
        props: { bus: array, 
                  }
    }
}


const Idsjmk = ({ bus }) => {
    return (
            <div className={Grid.grid}>
        <Navigation />
        <div className={Style.header}>
        
        <div><Clocks/></div>
        </div>
            <div className={Style.logo}>
                <div className={Style.logoflex}>
                <Image
                    src={"/logo.png"}
                    alt="MeSOS logo"
                    width={"210px"}
                    height={"60px"}
                />
                </div>
            </div>
            <div className={Style.adminpanel}></div>
        <div className={Style.back}>
            <div>
                {bus.map(businfo =>(
                 <div key={businfo.signs}>
                     <div className={Style.card}>
                        <h1>Autobus #{bus.indexOf(businfo)}</h1>
                        <h3>Jede do {businfo.departures[0].destinationStop}</h3>
                        <h3>Linka {businfo.busStopSign.description}</h3>
                        <h3>Jede v {businfo.departures[0].time}</h3>
                     </div> 
                     </div> 
                )                    
                    )}
                    </div>
         </div>
        </div>
    );
            
}

export default Idsjmk;