import { useSelector } from "react-redux";
import {TodoInput, TodoList, TodoListItem} from "./components/Todo";

function App() {
  const todo = useSelector(state => state.todo)

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
