import React from 'react'

import './TodoList.css'
// same like prop types
interface TodoListProps {
    items: {id: number,todos: string }[]
    onDelete: (id: number) => void
}


const TodoList: React.FC<TodoListProps> = (props) => {
    return(
        <>
        <ul>
            {props.items.map((item, index)=>
                <li key={item.id}>
                    <span>{item.todos}</span>
                    <button onClick={props.onDelete.bind(null, item.id)}>Delete</button>    
                </li>
            )}
        </ul>
        </>
    )

}

export default TodoList;  