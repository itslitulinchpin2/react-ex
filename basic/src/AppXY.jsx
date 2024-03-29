import React from 'react'
import './AppXY.css'
import { useState } from 'react';
export default function AppXY() {
   


    const [position,setPosition]=useState({x:0,y:0})
    
    const setMousemove = (event)=>{
       setPosition({x:event.clientX,y:event.clientY});
      
    }

  return (
    <div className='container' onPointerMove={setMousemove} >
        <div className='pointer' style={{transform: `translate(${position.x}px,${position.y}px)` }}></div>
      
    </div>
  )
}
