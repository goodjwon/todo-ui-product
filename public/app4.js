
const todoButtons = document.querySelectorAll(".todo-button");
const todoInputs = document.querySelectorAll(".todo-input");
const todoResult = document.querySelector(".todo-result");

todoButtons[0].addEventListener("click", event1);
todoButtons[1].addEventListener("click", event2);
todoButtons[2].addEventListener("click", event3);
todoButtons[3].addEventListener("click", event4);
todoButtons[4].addEventListener("click", event5);

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


