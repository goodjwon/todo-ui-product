import React from 'react'
import Todo from './Todo'

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
	</div>
  )
}

export default TodoList