
import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'


const Todo =({todo, toggleComplete, deleteTodo}) => {
  return (
    
    <div className='todo.completed ? style.liCompleted : li'>
        <div className='row'>
            <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked': ''}/>
            <p onClick={() => toggleComplete(todo)} className='todo.completed ? style.textComplete : text'> {todo.text}</p>
       </div>
       <div className='btn'>
        <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt/>}</button>
        </div>
      

    </div>
  )
}

export default Todo;










