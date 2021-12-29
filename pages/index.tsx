import React from 'react';
import Clocks from './component/clock';
import Navigation from './component/navigation';
import Uppernav from './component/nav';
import Grid from "/styles/grid.module.css";

export default function index(){
  return (
    <div className={Grid.grid}>
      <Uppernav /> 
</div>
  );
}
