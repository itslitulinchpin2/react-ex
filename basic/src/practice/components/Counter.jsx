import React from 'react'
import { useState } from 'react'
export default function Counter({number,setNumber}) {
    
    const [num1,setNum1]=useState(0);

  return (
    <div className='counter'>
       
        <span className='number'>{num1}/{number}</span>
        <button onClick={()=>{
            setNum1(num1+1);
            setNumber((number)=>number+1);
            }}className='button'>Add+</button>
      
    </div>
  )
}
