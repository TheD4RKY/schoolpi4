import React from "react";
import Clock from 'react-live-clock';

export default function Clocks(){

  return(
    <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Prague'}/>
  );
  }

  //pouzivam knihovnu na hodiny