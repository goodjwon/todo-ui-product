import React from 'react'

const Form = () => {
  return (
	<form>
		<input type="text" className="todo-input" />
		<button className="todo-button" type="submit">submit</button>
		<div className="select">
			<select name="todo" id="" className="filter-todo">
				<option value="all">All</option>
				<option value="completed">completed</option>
				<option value="uncompleted">uncompleted</option>
			</select>
		</div>
	</form>
  )
}

export default Form