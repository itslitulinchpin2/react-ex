import React from 'react'
import Nav from './Nav'
import { useParams } from 'react-router-dom'
export default function Video() {
    const {videoId} =useParams();
 
  return (
    <div>
        <Nav/>
        <h1>This is Video id : {videoId} </h1>
      
    </div>
  )
}
