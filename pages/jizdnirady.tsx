import React from "react";
import Style from '/styles/idos.module.css';
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
        <div className={Style.back}>
        <section className={Style.header}>
                <h1 className={Style.htext}>
                    Klobouky u Brna, Odjezdové jízdní řády
                </h1>
            </section>
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
    );
            
}

export default Idsjmk;