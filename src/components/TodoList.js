import React from 'react'
import Todo from './Todo'

function TodoList({todos,setTodos,filteredTodos}) {
    
    return (
        <div className="todo-container">
            <ul className="todo-list">
               {filteredTodos.map(todo=>( 
                   <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text}/>
               )
               )}
            </ul>
        </div>
    )
}

export default TodoList
