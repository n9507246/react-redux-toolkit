import { useSelector } from "react-redux";
import {useEffect} from 'react'
import {TodoInput, TodoList, TodoListItem} from "./components/Todo";
import axios from "axios";

function App() {
  const todo = useSelector(state => state.todo)

  useEffect(()=>{
    axios.get('http://localhost:3000/posts')
    .then((res) => console.log(res))
  }, [])

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
