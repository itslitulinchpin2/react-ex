import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav';

export default function Videos() {
    const navigate = useNavigate();
    const handleChange = (e)=>{
        e.preventDefault();
        setText(e.target.value);
    }
    const handleSumbit = (e)=>{
        e.preventDefault();
        setText('')
        navigate(`/videos/${text}`)
    }


    const [text,setText]=useState('');
  return (
    <div>
        <Nav></Nav>
      <h1>Videos</h1>
      <form onSubmit={handleSumbit}>
        <input onChange = {handleChange} value = {text} type="text" placeholder="video id: "/>
        <button>submit</button>
      </form>

    
     </div>
  )
}
