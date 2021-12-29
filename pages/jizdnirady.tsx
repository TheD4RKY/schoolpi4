import React from "react";
import Image from 'next/image';
import Navigation from "./component/navigation";
import Style from '/styles/idos.module.css';
import Grid from "/styles/grid.module.css";
import Clocks from "./component/clock";
import { setInternalBufferSize } from "bson";
import Uppernav from "./component/nav";
export const getStaticProps = async () => {
    const res = await fetch('https://www.idsjmk.cz/api/departures/busstop-by-name?busStopName=Klobouky%20u%20Brna%2C%20n%C3%A1m%C4%9Bst%C3%AD');
    const data = await res.json();
    var array = [];
    var number;
    /* const Style1 = {
        gridColumnStart: 1,
        gridColumnEnd: 2,
        color: "white",
    };
    const Style2 = {
        gridColumnStart: 2,
        gridColumnEnd: 3,
        color: "white",
    };
    const Style3 = {
        gridColumnStart: 3,
        gridColumnEnd: 4,    
        color: "white",
    }; */
    array = data.stops[0].signs;
    for(var init = 0;init < array.length; init++){
        array[init];
    }
    for (var inits = 1; inits <= array.length; inits++) {
        number = inits;
    }
    console.log(array.length);
    return {
        props: { bus: array, 
/*                  Style1: Style1,
            Style2: Style2,
            Style3: Style3,
*/            number: number,
                }
    }
}


const Idsjmk = ({ bus, Style1, Style2, Style3, number }) => {
    return (
            <div className={Grid.grid}>
            <Uppernav />
            <div className={Style.adminpanel}></div>
            <div className={Style.back}>
            {bus.map(businfo => (
            <div key={businfo.signs} style={{ flexDirection: "row", display: "flex"}}>
                    <div className={Style.card} /*style={Style1, { gridRowStart: number, gridRowEnd: 2,}} key={businfo.signs}*/>
                            <h1 className={Style.cardh1}>Linka {businfo.departures[0].link}</h1>
                        </div>
                    <div className={Style.card} /*style={Style2, { gridRowStart:  number, gridRowEnd: 2, }}*/ >
                            <h1 className={Style.cardh1}>Jede do {businfo.departures[0].destinationStop}</h1>
                    </div><div className={Style.card} /*style={Style3, { gridRowStart: number, gridRowEnd: 2 ,}}*/>
                            <h1 className={Style.cardh1}>Jede v {businfo.departures[0].time}</h1>
                     </div> 
                     </div> 
                )                    
                    )}
         </div>
       </div>
        
    );
            
}

export default Idsjmk;