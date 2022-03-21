const listSong = document.querySelector('.list-song');
const backIcon = document.querySelector('.back-icon');
const homeIcon = document.querySelector('.home');
const clock = document.querySelector('.clock');
const buttonShowListSong = document.querySelector('.showmusic');
const clockTimer = document.querySelector('.clockTimer');
let isDisplay = false

buttonShowListSong.onclick = () => {
	listSong.style.display = 'block'
	isDisplay = true
	showIconBack(isDisplay)

}

backIcon.onclick = () => {
	listSong.style.display = 'none'
	isDisplay = false
	showIconBack(isDisplay)
}

function showIconBack(isDisplay) {
	if (isDisplay === true) {
		backIcon.style.display = 'block'
	}else{
		backIcon.style.display = 'none'
	}
}

homeIcon.onclick = () => {
	clockTimer.style.display = 'none'
	location.href = '#header'
}

clock.onclick = () => {
	if (clockTimer.style.display === 'none') {
		clockTimer.style.display = 'flex'
	}else{
		clockTimer.style.display = 'none'
	}
}