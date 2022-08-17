import React from 'react'

const Todo = ({text}, {key}) => {
  return (
	<div className='todo'>
		<li className="todo-item">{text}</li>
		<button className="done">Done</button>
		<button className="delete">Delete</button>
	</div>
  )
}

export default Todo