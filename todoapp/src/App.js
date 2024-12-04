import React, { useState } from 'react'
import './App.css';
import TodoInput from './Todocompo/TodoInput';
import TodoList from './Todocompo/TodoList';

function App() {
  const [listTodo , setTodo] = useState([]);
  let addList = (inputText) =>{
    if (inputText !== "") {
      setTodo([...listTodo , inputText]);
    }
  }
  const deleteTodo = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1);
    setTodo([...newListTodo]);
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1 className='h-txt'>TODO</h1>
        <hr />
        {listTodo.map((listItem,i)=>{
          return(
            <TodoList key={i} item={listItem} deleteTodo={deleteTodo} index={i}/>
          )
        })}
      </div>
    </div>
  )
}

export default App