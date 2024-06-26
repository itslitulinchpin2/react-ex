import React from 'react'
import { useState } from 'react'
export default function AppMentor() {
    const[person,setPerson]=useState({
        name:'lee',
        title:'director',
        mentors:{
            name:'park',
            title:'senior director'
        }
        })
    
  return (
    <div>
        <h1>
            {person.name}는 {person.title}
        </h1>
        <p>
            {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
        </p>

        <button
        onClick={()=>{
            const name = prompt(`What's your mentor's name?`);
            setPerson({...person, mentor:{...person.mentor, name:name}});
        }}>멘토 이름 바꾸기</button>

        <button
            onClick={()=>{
                const title = prompt(`What is your mentor's title?`)
                setPerson({...person, mentor:{...person.mentor, title:title}});
            }}>멘토 타이틀 바꾸기
        </button>
      
    </div>
  )
}
