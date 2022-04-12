import {clockTimer} from './clockTimer.js'
const listSong = document.querySelector('.list-song');
const backIcon = document.querySelector('.back-icon');
const homeIcon = document.querySelector('.home');
const buttonShowListSong = document.querySelector('.showmusic');

buttonShowListSong.onclick = () => {
	listSong.classList.add('isopen')
	backIcon.style.display = 'block'
}

homeIcon.onclick = () => {
	clockTimer.classList.remove('isopen')
	listSong.classList.remove('isopen')
	backIcon.style.display = 'none'
	location.href = '#header'
}

backIcon.addEventListener('click', () => {
	clockTimer.classList.remove('isopen')
	listSong.classList.remove('isopen')
	backIcon.style.display = 'none'
})
export {backIcon}