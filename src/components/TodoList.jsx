import React from 'react'
import Todo from './Todo'
import Button from './Button'

const TodoList = ({todos, setTotods, filterReadTodos}) => {
  return (
	<div className="todo-container">
		<ul className="todo-list">
			{todos.map(todo => (
				<Todo 
				setTotods={setTotods}
				todos={todos}
				todo={todo}
				text={todo.text} 
				key={todo.id}/>
			))}
		</ul>
		<Button/>
	</div>
  )
}

export default TodoList