import { useDispatch } from 'react-redux'
import classes from './todoListItem.module.scss'
import { removeTodo, toggleTodoComplited } from '@redux-slices/todoSlice'

export default function TodoListItem(props){
    
    const dispatch = useDispatch()
    const deleteTodo = () => dispatch(removeTodo(props.data.id))
    const checkedTodo = () => dispatch(toggleTodoComplited(props.data.id))

    return <div className={classes.todoList__item}>
        <input type="checkbox" onChange={checkedTodo}/>
        <div className={
            props.data.complited ? classes.todoListItem__text + '   ' + classes.todoListItem__complited 
            : classes.todoListItem__text}
        >
            {props.data.name}
        </div>
        <div onClick={deleteTodo} className={classes.todoListItem__delete}>&times;</div>
    </div>
}