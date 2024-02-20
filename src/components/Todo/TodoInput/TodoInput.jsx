import { useDispatch } from 'react-redux'
import './todoInput.module.scss'
import { useState } from 'react'
import { addTodo } from '@redux-slices/todoSlice'


export default function TodoInput(){
    
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    const addNewTodo = (e) => {
        e.preventDefault()
        
        if(inputValue.trim().length > 0){
            dispatch(addTodo(inputValue))
            setInputValue('')
        }
    }
    return(
        <div>
            <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} />
            <button onClick={addNewTodo}>add Todo</button>
        </div>
    )
}