import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo} from '../redux/TodoSlice/todoSlice'

function Todo() {

    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()
    
  return (
    <>
     <div><h1>Todos</h1></div>
     <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
              </li>
        ))}
     </ul>
    </>
  )
}

export default Todo
