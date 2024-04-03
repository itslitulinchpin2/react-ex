import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './components/List';
function App() {


  return (
  <div className="page">
  <nav className="nav">
    <button id="icon">다크모드</button>
    <button>All</button>
    <button>Active</button>
    <button>Completed</button>
  </nav>
  <section className="section">
    <List content="haha"></List>
    <List content="hahaha"></List>
    <List content="hahahaha"></List>
  </section>
  <footer className="footer">
    <textarea className="textarea" placeholder='add todo'></textarea>
    <button className="add">add</button>
  </footer>
  </div>
  );
}

export default App;
