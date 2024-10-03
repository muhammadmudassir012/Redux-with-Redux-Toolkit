import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from '../redux/TodoSlice/todoSlice'

function AddTodo() {

  const addToHandler = (e) => {
    e.preventDefault()
    dispatch(addtodo(input))
    setInput("")
}

  const [input,setInput] = useState('')
  const dispatch = useDispatch()

  return (
    <form onSubmit={addToHandler}>
        <input type="text" placeholder='Enter Todo' value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default AddTodo
