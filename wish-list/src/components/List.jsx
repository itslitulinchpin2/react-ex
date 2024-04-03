import React from 'react'
import styles from './List.module.css';
export default function List({content,done,todos,setTodos}) {

    function deleteList(content){
        console.log('delete it!')
        setTodos(todos.filter(todo=>todo.content!==content))
    }
    const handleCheckboxChange=()=>{
        setTodos(todos.map(todo=>{
            if(todo.content===content){
                return {...todo, done:!done};
            }
            return todo;
        }))
    }
 
  return (
    <div className={styles.list} id="list">
      <input type="checkbox"
            checked={done}
            onChange={handleCheckboxChange}/>
        {content}
      <button onClick={()=>deleteList(content)} className={styles.delete}>삭제하기</button>
     
    </div>
  )
}
