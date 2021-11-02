import React from 'react';
import Clocks from './component/clock';
import Navigation from './component/navigation';

export default function index(){
  return (
    <>
    <div>
  <Navigation/>
  <Clocks />
</div>
</>
  );
}
