
const todoButtons = document.querySelectorAll(".todo-button");
const todoInputs = document.querySelectorAll(".todo-input");
const todoResult = document.querySelector(".todo-result");

todoButtons[0].addEventListener("click", eventAll);
todoButtons[1].addEventListener("click", eventAll);
todoButtons[2].addEventListener("click", eventAll);
todoButtons[3].addEventListener("click", eventAll);
todoButtons[4].addEventListener("click", eventAll);

function event1(e) {
	e.preventDefault();
	todoResult.innerHTML = todoInputs[0].value;
}
function event2(e) {
	e.preventDefault();
	todoResult.innerHTML = todoInputs[1].value;
}
function event3(e) {
	e.preventDefault();
	todoResult.innerHTML = todoInputs[2].value;
}
function event4(e) {
	e.preventDefault();
	todoResult.innerHTML = todoInputs[3].value;
}

function event5(e) {
	e.preventDefault();
	todoResult.innerHTML = "";
	todoInputs.forEach(v => {
		todoResult.innerHTML += v.value + " ";
	});
}

function eventAll(event){
	todoResult.innerHTML = "";
	console.log({
		type: event.type,
		id: event.target.id,
		name: event.target.name,
		value: event.target.value,
	  });

	  if(event.target.id !== "btn-5"){
	  	todoResult.innerHTML = todoInputs[event.target.value].value;
	  }else{		
		todoInputs.forEach(v => {
		todoResult.innerHTML += v.value + " ";});
	}
}


