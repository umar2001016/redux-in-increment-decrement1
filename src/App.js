import React from 'react';

import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { iceNumber,decNumber } from './Action/index';
function App() {
  const myState =useSelector((state) => state.changeTheNumber);
  const dispatch =useDispatch();
  return (
    <div className="stars">
   <div className="main">
    <h1> Incremenet / decrement </h1>
    <h2> using react redux</h2>
    <div className="quantity">
      <a className='quantity-minus' title='Decrement' onClick={()=> dispatch(decNumber())}> <span> - </span> </a>
      <input name='quantity'  type="text" className='quantity_value' value= {myState}/>
      <a className='quantity-plus' title='increment' onClick= {()=> dispatch(iceNumber()) }> <span>+</span></a>
    </div>
   </div>
   </div>
  );
}

export default App;
