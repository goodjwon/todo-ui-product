const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);

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
	todoInput.value = "";
  
	//attach final Todo
	todoList.appendChild(todoDiv);
}

function deleteTodo(e) {
	//todo 를 삭제 한다.
}

function filterTodo(e) {
 //todo를 필터링 해서 보여준다.
}

function saveLocalTodos(todo) {
 // todo 목록 관리용 (추가, 로컬 스토리지 저장)
 // 향후 api로 연결
}
function removeLocalTodos(todo) {
 // todo 목록관리용 (삭제, 로걸 스토리지 삭제)
 // 향후 api로 연결
}

function getTodos() {
 // todo 목록관리용 (가져오기, 로걸 스토리지에서 가져오기)
 // 향후 api로 연결
}
