const buttonListGym = document.querySelector('.todolist');
const todolistGym = document.querySelector('.todo-list-gym');
buttonListGym.onclick = () => {
	if (todolistGym.style.display === 'none') {
		todolistGym.style.display = 'flex'

	}else{
		todolistGym.style.display = 'none'
	}
}