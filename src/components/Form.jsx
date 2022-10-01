import React from 'react'

const Form = ({ setInputText, todoList, setTodoList, inputText, setStatus }) => {
  
  const inputTextHandler = (e)=>{
	setInputText(e.target.value);
	
  };

  const submitTodoHandler = (e)=>{
	e.preventDefault();
	setTodoList([
		...todoList, {text: inputText, id: Math.random()*1000, completed: false },
	])
	setInputText("");
	
  };
  const statusHandler = (e) =>{
	setStatus(e.target.value);
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
			<select name="todo" id="" className="filter-todo" onChange={statusHandler}>
				<option value="all">All</option>
				<option value="completed">completed</option>
				<option value="uncompleted">uncompleted</option>
			</select>
		</div>
	</form>
  )
}

export default Form