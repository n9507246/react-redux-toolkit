import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import todoSlice from './slices/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoSlice,
  },
})