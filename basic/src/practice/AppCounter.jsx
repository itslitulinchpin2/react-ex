import React from 'react'
import './App.css';
import Counter from './components/Counter'
import { useState } from 'react';
export default function AppCounter() {
    const [number,setNumber]=useState(0);
  return (
    <div className='container'>
     <div className='banner'>
        Total Number: {number} {number>10?'!!!':''}
        </div>
      <Counter  number={number}setNumber={setNumber}/>
      <Counter  number={number}setNumber={setNumber}/>
    </div>
  )
}
