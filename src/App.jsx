import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react'
import {TodoInput, TodoList, TodoListItem} from "./components/Todo";
import { fetchTodos } from "./redux/slices/todoSlice";

function App() {
  const todo = useSelector(state => state.todo)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchTodos())
  }, [])

  // axios.get('http://localhost:3000/todos').then((res) => res.data)

  return (
    <TodoList>
      <TodoInput/>
      {
        todo.list.map(todoData => <TodoListItem data={todoData} key={todoData.id}/>)
      }
    </TodoList>
  )
}

export default App
