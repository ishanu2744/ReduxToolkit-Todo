import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
    todos:[{id:1,text:"Hello React"}]
}

export const todoSlice=createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,acttion)=>{
            const todo={
                id: nanoid(),
                text: acttion.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,acttion)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== acttion.payload)
        },
    }
})

export const {addTodo,removeTodo}= todoSlice.actions

export default todoSlice.reducer