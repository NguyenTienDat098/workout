import {clockTimer} from './clockTimer.js'
const listSong = document.querySelector('.list-song');
const backIcon = document.querySelector('.back-icon');
const homeIcon = document.querySelector('.home');
const buttonShowListSong = document.querySelector('.showmusic');

buttonShowListSong.onclick = () => {
	listSong.style.display = 'block'
	backIcon.style.display = 'block'

}

homeIcon.onclick = () => {
	clockTimer.style.display = 'none'
	listSong.style.display = 'none'
	backIcon.style.display = 'none'
	location.href = '#header'
}

backIcon.addEventListener('click', () => {
	if (clockTimer.style.display !== 'none') {
		clockTimer.style.display = 'none'
		backIcon.style.display = 'none'

	}
	if (listSong.style.display !== 'none') {
		listSong.style.display = 'none'
		backIcon.style.display = 'none'

	}
})
export {backIcon}