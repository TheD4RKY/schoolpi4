import React from "react";
import Clock from 'react-live-clock';
import Style from "/styles/clock.module.css"
export default function Clocks(){

  return(
    
    <div className={Style.clock}>
    <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Prague'}/>
    </div>
    
  );
  }

  //pouzivam knihovnu na hodiny