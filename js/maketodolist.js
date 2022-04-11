const inputGymExcrise = document.querySelector('.input-gym-excrise');
const inputTimePicker = document.querySelector('.time-pickable');
const buttonSubmitTodo = document.querySelector('.send-todo');
const viewTODO = document.querySelector('.view-todo');
let TODO = []


getFromLocalStorage();

function renderTODO(TODO) {
	viewTODO.innerHTML = ''
	TODO.map((e,i) => {
		if (e.name !== undefined && e.time !== undefined ) {
			viewTODO.innerHTML += `
			<div class="item-todo">
			<h3 class="title-todo">${e.name}</h3>
			<h3 class="time-ex">${e.time}</h3>
			<ion-icon class="delete-item"name="trash-outline" date-key="${e.id}"></ion-icon>
			</div>
			`
		}
	})
}

function addToLocalStorage(todos) {
	localStorage.setItem('todos', JSON.stringify(todos));
	renderTODO(todos);
}

function addTodo(itemEx,timeEx) {
	if (itemEx !== '') {
		const todo = {
			id: Date.now(),
			name: itemEx,
			time: timeEx,
			completed: false
		};
		TODO.push(todo);
		inputGymExcrise.value = '';
	}
}

function getFromLocalStorage() {
	const reference = localStorage.getItem('todos');
	if (reference) {
		TODO = JSON.parse(reference);
		renderTODO(TODO);
	}
}

buttonSubmitTodo.onclick = (e) => {
	e.preventDefault()
	addTodo(inputGymExcrise.value,inputTimePicker.value)
	addToLocalStorage(TODO)
}

removeTODO(TODO)
function removeTODO(TODO) {
	const buttonDelete = document.querySelectorAll('.delete-item');
	buttonDelete.forEach((e,i) => { 
		e.addEventListener('click', function() {
			let IDremove = e.getAttribute('date-key')
			TODO.forEach((e,i) => {
				let swap = TODO.filter((e,i) => {
					return e.id != IDremove
				})
				TODO = swap
				addToLocalStorage(TODO)
			})
		});
	})
}
