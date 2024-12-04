import React, { useState } from 'react'

function TodoInput(props) {
    const [inputText, setText] = useState("");
    const keyDown = (e) =>{
        if (e.keyCode === 13) {
            props.addList(inputText);
            setText('')
        }
    }
  return (
    <div className="input-container">
        <input type='text' className='inputTxt' placeholder='Enter Your Todo Here' value={inputText} onChange={e=>{setText(e.target.value);}} onKeyDown={keyDown}/>
        <button className='add-btn' onClick={()=>{props.addList(inputText);setText('')}}>+</button>
    </div>
  )
}

export default TodoInput