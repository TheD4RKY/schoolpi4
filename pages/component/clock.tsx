import React from "react";
import Clock from 'react-live-clock';
import Style from "/styles/clock.module.css"
export default function Clocks(){

  return(
    <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Prague'}
     className={Style.clock}
    
    />
  );
  }

  //pouzivam knihovnu na hodiny