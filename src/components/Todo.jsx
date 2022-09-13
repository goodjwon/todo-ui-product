import React from 'react'

const Todo = ({text, todo, todoList, setTodoList}) => {
	const deleteHandler = () => {
		setTodoList(todoList.filter(el => el.id !== todo.id))

	};

	const completeHandler = () => {
		setTodoList(todoList.map((item)=>{
			if(item.id === todo.id){
				return {
					...item, completed: !item.completed
				}
			}
			return item;
		}));
	}
    
  return (
	<div className='todo'>
		<li className={`todo-item ${todo.completed ? "completed": ""}`}>{text}</li>
		<button onClick={completeHandler} className="done">Done</button>
		<button onClick={deleteHandler} className="delete">Delete</button>
	</div>
  )
}

export default Todo