import React from 'react';
import Clocks from './component/clock';
import Navigation from './component/navigation';
import Style from "/styles/grid.module.css";

export default function index(){
  return (
    <div className={Style.grid}>

  <Navigation/>
  <Clocks />

</div>
  );
}
