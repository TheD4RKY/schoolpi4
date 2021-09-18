import React, {useState, useEffect} from "react";

export const getStaticProps = async () => {
    const res = await fetch('https://www.idsjmk.cz/api/departures/busstop-by-name?busStopName=Klobouky%20u%20Brna%2C%20n%C3%A1m%C4%9Bst%C3%AD');
    const data = await res.json();
    var obj = res;
    console.log(data.stops[0].stop.id);
    return {
        props: { jeba: data}
    }
}

const Idsjmk = ({ jeba }) => {
        return (
            <div>

            <h1>Damn</h1>
                <a><h1>{jeba.stops[0].stop.fullName}</h1></a>
            </div>
        );
    }

export default Idsjmk;