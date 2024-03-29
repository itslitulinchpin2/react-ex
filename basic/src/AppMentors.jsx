import React, { useReducer } from 'react'
import personReducer from './reducer/person-reducer'
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
    //const[person,setPerson]=useState(initialPerson)
    const [person,dispatch]=useReducer(personReducer,initialPerson);
    const handleUpdate=()=>{
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt('이름을 무엇으로 바꾸시겠어요?');
        dispatch({type:'updated',prev,current})
    }

    const addMentor = ()=>{
        const name = prompt('추가할 멘토의 이름은?');
        const title=prompt('추가할 사람의 타이틀은?');
       dispatch({type:'added',name,title})
    }

    const deleteMentor = ()=>{
        const name=prompt('삭제할 사람의 이름은?');
       dispatch({type:'deleted',name})
    }
    
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

        <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
        <button onClick = {addMentor}>멘토 추가하기</button>
        <button onClick={deleteMentor}>멘토 삭제하기</button>  
      
    </div>
  )
}
