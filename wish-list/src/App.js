import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './components/List';
function App() {

  const [todos,setTodos]=useState([
    {content:'hahaha',done:false},
    {content:'hahahahaha',done:true}
  ]);

  const [inputValue,setInputValue]=useState('');
  const [menu,setMenu]=useState('all');

  function modeChange(){
    console.log('change color');
  }
  function showAll(){
    console.log('showAll');
    setMenu('all');
  }
  function showActive(){
    console.log('show active');
    setMenu('active');
  }
  function showCompleted(){
    console.log('show completed');
    setMenu('completed');
  }
  function handleInputChange(e){
    //console.log(e.target.value);
    setInputValue(e.target.value);
  }
  function addTodo(){
    //console.log(inputValue);
    todos.push({content:inputValue, done:false})
    setTodos([...todos]);
    setInputValue('')
  }

  return (
  <div className="page">
  <nav className="nav">
    <button onClick={modeChange} id="icon">다크모드</button>
    <button onClick={showAll}>All</button>
    <button onClick={showActive}>Active</button>
    <button onClick={showCompleted}>Completed</button>
  </nav>
  <section className="section">
    
 
    {
    menu==='all'
    ?
    todos.map((todo)=>{
    return <List key= {todo.content} content={todo.content} done={todo.done} todos={todos} setTodos={setTodos}/>
    })
    :
      menu==='active' ? 
      todos.map((todo)=>{
        if(todo.done===false){
        return <List key= {todo.content} content={todo.content} done={todo.done} todos={todos} setTodos={setTodos}/>
        }
      })
      : todos.map((todo)=>{
        if(todo.done===true){
          return <List key= {todo.content} content={todo.content} done={todo.done} todos={todos} setTodos={setTodos}/>
        }
      })
   
    }
    
  
  </section>
  <footer className="footer">
    <textarea  value={inputValue} onChange={handleInputChange} className="textarea" placeholder='add todo'></textarea>
    <button onClick={addTodo} className="add">add</button>
  </footer>
  </div>
  );
}

export default App;
