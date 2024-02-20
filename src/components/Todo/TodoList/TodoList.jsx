import classes from './todoList.module.scss'

export default function TodoList(props){
    return <div className={classes.todoList__wrapper}>{props.children}</div>
}