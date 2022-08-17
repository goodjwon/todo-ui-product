import React from 'react'

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  
  const inputTextHandler = (e)=>{
	console.log(e.target.value);
	setInputText(e.target.value);
	
  };

  const submitTodoHandler = (e)=>{
	e.preventDefault();
	setTodos([
		...todos, {text: inputText, completed:false, id: Math.random()*1000},
	])
	setInputText("");
	
  }
  return (
	<form>
		<input 
			value={inputText} 
			onChange={inputTextHandler} 
			type="text" 
			className="todo-input" />
		<button onClick={submitTodoHandler} className="todo-button" type="submit">submit</button>
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