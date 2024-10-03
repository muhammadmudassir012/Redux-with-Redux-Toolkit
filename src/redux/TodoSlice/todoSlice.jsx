import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialstate = {
    todos: [{id:1 , text:'Hello world'}]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialstate,
    reducers: {
        addtodo: (state,action) => {
             const todo = {
                id: nanoid(),
                text: action.payload
             }
             state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        } 
    }
})

export default todoSlice.reducer
export const {addtodo,removeTodo} = todoSlice.actions   