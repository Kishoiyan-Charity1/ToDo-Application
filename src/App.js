import React from 'react';
import './App.css';
import { AiOutlinePlus } from 'react-icons/ai'
import { useState, useEffect } from 'react';
import Todo from './Todo';
import './index.css';
import { onSnapshot, query, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db } from './firebase'










function App() {
  const [todos, setTodos]= useState([]);
  const [input, setInput] = useState('')
console.log(input)



//update todo in firebase
const toggleComplete = async (todo) => {
  await updateDoc(doc(db, 'todos', todo.id), {
    completed: !todo.completed
  })
}




useEffect (()=> {
  const q = query(collection (db, 'todos'))
  const unsubscribe= onSnapshot(q, (QuerySnapshot) =>{
    let todosArr = []
    QuerySnapshot.forEach((doc) =>{
      todosArr.push({...doc.data(), id: doc.id})
    });
    setTodos(todosArr)
  })
  return () =>unsubscribe
}, [])




const createTodo = async (e) => {
  e.preventDefault(e)
  if(input=== '') {
    alert('add todo')
    return
  }
  await addDoc(collection(db, 'todos'),{
    text: input,
    completed: false,
  })
  setInput ('')
}

const deleteTodo = async (id) => {
  await deleteDoc(doc(db, 'todos', id))
}








    return (
      <div className="bg">
   
      <div className=" container">
        <h3 className="heading"> Todo App</h3>
        <form onSubmit={createTodo} className='form'>
          <input
           value={input} 
           onChange={(e) => setInput(e.target.value)} className='input' type='text' placeholder='Add Todo'></input>
          <button className='button'> < AiOutlinePlus size={12}/> </button>
        </form>

        <ul>
          {todos.map((todo, index) =>(
              <Todo key={index} todo={todo} toggleComplete={toggleComplete}
               deleteTodo={deleteTodo}/>


          ))}
        

        </ul>
        {todos.length < 1 ? null : <p className='count'>{`You have ${todos.length} todo`}</p>}
        
        

      </div>
     </div> 
    )
    
}

export default App;