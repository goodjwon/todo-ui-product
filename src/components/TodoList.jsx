import React from 'react'
import Todo from './Todo'
import Button from './Button'

const TodoList = ({todos}) => {
  return (
	<div className="todo-container">
		<ul className="todo-list">
			{todos.map(todo => (
				<Todo text={todo.text} key={todo.id}/>
			))}
		</ul>
		<Button/>
	</div>
  )
}

export default TodoList