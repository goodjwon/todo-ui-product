import React from 'react'
import Todo from './Todo'
import Button from './Button'

const TodoList = ({todoList, setTodoList, filteredTodoList}) => {
  return (
	<div className="todo-container">
		<ul className="todo-list">
			{filteredTodoList.map(todo => (
				<Todo
					setTodoList={setTodoList}  
					todoList = {todoList}
					key={todo.id} 
					todo={todo}
					text={todo.text} />
			))}
		</ul>
		<Button/>
	</div>
  )
}

export default TodoList