import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function(){
    return await axios.get('http://localhost:3000/todos').then((res) => res.data)
  }

)

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {list: []},
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
  extraReducers: (builder) => {
    builder.addCase(
      fetchTodos.fulfilled, 
      (state, action) => {
        // state.status = 'succeeded'
        state.list = action.payload
      }
    )
  }
})

export const { addTodo, removeTodo, toggleTodoComplited } = todoSlice.actions

export default todoSlice.reducer


/*
Для асинхронной инициализации slice в Redux Toolkit вы можете использовать функцию createAsyncThunk. Эта функция принимает строку типа действия Redux и функцию обратного вызова, которая должна возвращать промис. Она генерирует типы действий жизненного цикла промиса на основе префикса типа действия, который вы передаете, и возвращает созданный thunk action creator, который будет запускать обратный вызов промиса и отправлять действия жизненного цикла на основе его результата.
Вот пример использования createAsyncThunk:
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUser } from './api'

export const fetchUserById = createAsyncThunk(
  'users/fetchById',
  async (userId, thunkAPI) => {
    const response = await fetchUser(userId)
    return response.data
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default userSlice.reducer

Обратите внимание, что в этом примере мы определяем fetchUserById с помощью createAsyncThunk, а затем используем его в extraReducers для обновления состояния приложения в зависимости от результата промиса. Вы можете использовать любое количество createAsyncThunk в своем slice, чтобы обрабатывать любое количество асинхронных операций.
Чтобы использовать slice в вашем приложении, вы можете импортировать его и использовать его в configureStore:
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export default store

Теперь вы можете использовать store.dispatch(fetchUserById(userId)) для запуска асинхронной операции и обновления состояния вашего slice.
*/