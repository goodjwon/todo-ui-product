const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

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

function deleteTodo(e) {

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
