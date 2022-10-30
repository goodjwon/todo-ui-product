
const todoButtons = document.querySelectorAll(".todo-button");
const todoInputs = document.querySelectorAll(".todo-input");
const todoResult = document.querySelector(".todo-result");

todoButtons[0].addEventListener("click", eventAll);
// todoButtons[1].addEventListener("click", eventAll);
// todoButtons[2].addEventListener("click", eventAll);
// todoButtons[3].addEventListener("click", eventAll);
// todoButtons[4].addEventListener("click", eventAll);

function eventAll(event){
	todoResult.innerHTML = "";

	if(event.target.id !== "btn-5"){
		todoResult.innerHTML = todoInputs[event.target.value].value;
	} else {		
		todoInputs.forEach(v => {
		todoResult.innerHTML += v.value + " ";});
	}
}


