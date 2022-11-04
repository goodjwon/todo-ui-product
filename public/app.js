const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkedOne);
filterOption.addEventListener("click", filterTodo);


/**
 * TODO 버튼을 만든다.
 * @param {*} e 
 */
function addTodo(e) {
  // todo 를 추가 한다.
  	e.preventDefault(); 
    //Create todo div
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");
	
	//Create list
	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
  
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);
	saveLocalTodos(todoInput.value);
	todoInput.value = "";

	//Create Completed Button
	const completedButton = document.createElement("button");
	completedButton.innerHTML = `DONE`;
	completedButton.classList.add("complete-btn");
	todoDiv.appendChild(completedButton);
	
	//Create trash button
	const trashButton = document.createElement("button");
	trashButton.innerHTML = `DELETE`;
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);
  
	//attach final Todo
	todoList.appendChild(todoDiv);
}

/*
	 TODO 각 건단 버튼을 눌렀을 때 처리를 명기 한다. 
	 쿼리 셀렉터를 CLASS 가 아닌 ID 로 주고 리스너를 각이 붙여 주면 
	 메서드를 분리 처리 하는 것도 가능하다. (숙제.)
*/
function checkedOne(e) {
	// e.preventDefault(); 
	// console.log(e)
	const item = e.target;
	// console.log(item) 
	// console.log(item.classList)
	// console.log(item.classList[0])
	if(item.classList[0] === "trash-btn"){
		const removingOne = item.parentElement;
		removeLocalTodos(removingOne);
		removingOne.remove();
	}

	if(item.classList[0] === "complete-btn"){
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}


function filterTodo(e) {
	//todo를 필터링 해서 보여준다.
	const todos = todoList.childNodes;
	// console.log(todos)
	todos.forEach(function(todo){
		console.log(e.target.value);
		console.log(todo.style.display);

		switch(e.target.value){
			case "all":
				todo.style.display = "flex";
				break;
			case "completed":
				if(todo.classList.contains("completed")){
					todo.style.display = "flex";
				}else{
					todo.style.display = "none";
				}
				break;
			case "uncompleted":
				if(!todo.classList.contains("completed")){
					todo.style.display = "flex";
				}else{
					todo.style.display = "none";
				}
				break;
			default:
				break;
		}
	});
}

// todo 목록 관리용 (추가, 로컬 스토리지 저장)
function saveLocalTodos(todo) {
 	
	let todos;
	if(localStorage.getItem("todos") === null){
		todos = [];
	}else{
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	todos.push(todo);
	localStorage.setItem("todos", JSON.stringify(todos));
	// 향후 api로 연결
}

// todo 목록관리용 (가져오기, 로걸 스토리지에서 가져오기)
function getTodos() {
	console.log("hello")
	
	let todos;
	if(localStorage.getItem("todos") === null){
		todos = [];
	}else{
		todos = JSON.parse(localStorage.getItem("todos"));
	}

	console.log(todos);

	todos.forEach(function(todo){
		console.log(todo);
		//Create todo div
		const todoDiv = document.createElement("div");
		todoDiv.classList.add("todo");
		
		//Create list
		const newTodo = document.createElement("li");
		newTodo.innerText = todo;
	
		newTodo.classList.add("todo-item");
		todoDiv.appendChild(newTodo);

		//Create Completed Button
		const completedButton = document.createElement("button");
		completedButton.innerHTML = `DONE`;
		completedButton.classList.add("complete-btn");
		todoDiv.appendChild(completedButton);
		
		//Create trash button
		const trashButton = document.createElement("button");
		trashButton.innerHTML = `DELETE`;
		trashButton.classList.add("trash-btn");
		todoDiv.appendChild(trashButton);

		//attach final Todo
		todoList.appendChild(todoDiv);
	});
	
	// 향후 api로 연결
}
 
 // todo 목록관리용 (삭제, 로걸 스토리지 삭제)
function removeLocalTodos(todo) {

	let todos;	// [숙제] 공통함수로 만들어 대체 가능
	if(localStorage.getItem("todos") === null){
		todos = [];
	}else{
		todos = JSON.parse(localStorage.getItem("todos"));
	}

	console.log(todo.children[0].innerText);

	const todoIndex = todo.children[0].innerText;
	todos.splice(todos.indexOf(todoIndex), 1);

	localStorage.setItem("todos", JSON.stringify(todos));

 // 향후 api로 연결
}


