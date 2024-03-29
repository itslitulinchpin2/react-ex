import React from 'react'
import { useState } from 'react'
export default function AppMentor() {
    const initialPerson={  
    name:'lee',
    title:'director',
    mentors:[
        {
        name:'park',
        title:'senior director'
        },
        {
        name:'Bong',
        title:"writer"
        }]
    }
    const[person,setPerson]=useState(initialPerson)

    // const findIndex = (input)=>{
    //     for(let i=0;i<person.mentors.length;i++){
    //         if(person.mentors[i].name===input){
    //             return i;
    //         }
    //     }
    // }
    
  return (
    <div>
        <h1>
            {person.name}는 {person.title}
        </h1>
        <p>
            {person.name}의 멘토는:
        </p>
        
        <ul>
            {person.mentors&&person.mentors.map((mentor,index)=>
                <li key={index}>
                    {mentor.name} ({mentor.title})
                </li>
            )}
        </ul>

        <button
        onClick={()=>{
            const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
            // let foundIndex = findIndex(prev);
            // console.log(foundIndex);
            const current = prompt('이름을 무엇으로 바꾸시겠어요?');
            setPerson({...person, mentors:person.mentors.map((mentor)=>{
                if(mentor.name===prev){
                    return {...mentor, name:current}
                }  return mentor;})
            })
        }}>멘토 이름 바꾸기</button>
        <button onClick = {()=>{
            const name = prompt('추가할 멘토의 이름은?');
            const title=prompt('추가할 사람의 타이틀은?');
            person.mentors.push({name:name,title:title});
            setPerson({...person,mentors:[...person.mentors]})
        }}>멘토 추가하기</button>
        <button onClick={()=>{
            const name=prompt('삭제할 사람의 이름은?');
            setPerson({...person, mentors:person.mentors.filter((mentor)=>mentor.name!==name)
            })
        }}>멘토 삭제하기</button>

        
      
    </div>
  )
}
