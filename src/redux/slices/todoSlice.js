import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    { name: 'ass', id: 1, complited: false, },
    { name: 'hole', id: 23, complited: true,},
    { name: 'ass hole', id: 102, complited: false,},
    
],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push({
          id: Date.now(),
          name: action.payload,
          complited: false
      })
    },
    removeTodo: (state, action) => { 
      state.list = state.list.filter(todo => todo.id !== action.payload)
    },
    toggleTodoComplited: (state, action) => {
      const toggledTodo  = state.list.find(todo => todo.id === action.payload)
      toggledTodo.complited = !toggledTodo.complited 
    },
    
  },
})

export const { addTodo, removeTodo, toggleTodoComplited } = todoSlice.actions

export default todoSlice.reducer