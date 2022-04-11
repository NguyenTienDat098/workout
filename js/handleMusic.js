import {listSongGym, listVideo} from './Song.js'

function renderListSong(list) {
	const IsPlaying = document.createElement('ion-icon')
	const listSong= document.querySelector('.list-song')
	const itemSong = document.createElement('div');
	const titleSong = document.createElement('p');
	const titleAuthor = document.createElement('p');
	const titleItemSong = document.createElement('div');
	const iconPlay = document.createElement('ion-icon');
	titleItemSong.classList.add('title-item-song')
	itemSong.classList.add('item-song')
	titleSong.classList.add('title-song')
	titleAuthor.classList.add('title-author')
	titleItemSong.appendChild(titleSong)
	titleItemSong.appendChild(titleAuthor)
	iconPlay.setAttribute('name','play-circle-outline')
	itemSong.appendChild(titleItemSong)
	IsPlaying.setAttribute('name','musical-notes-outline')
	IsPlaying.classList.add('isPlaying')
	itemSong.appendChild(IsPlaying)
	itemSong.appendChild(iconPlay)
	titleSong.textContent = list.titleSong;
	titleAuthor.textContent = 'Src: NCS'
	listSong.appendChild(itemSong)
	iconPlay.value = list.id
	iconPlay.classList.add('play-in-list')
	listSong.style.display = 'none'
}
listSongGym.forEach((e,i) => {
	renderListSong(e)	
})
// render list song end
const audio = document.querySelector('#audio'),
buttonPlayInList = document.querySelectorAll('.play-in-list'),
playButton = document.querySelector('.play-button'),
titleSongPlay = document.querySelector('.title-song-play'),
lengthAudioMinutes = document.querySelector('.minutes'),
lengthAudioSeconds = document.querySelector('.seconds'),
progressInput = document.querySelector('.progress'),
buttonNextSong = document.querySelector('.next-buttton'),
buttonPrevSong = document.querySelector('.prev-buttton'),
volumeButton = document.querySelector('.volumeButton'),
Playing = document.querySelectorAll('.isPlaying'),
playList = document.querySelector('.list-song'),
playSong = document.querySelector('.play-song'),
CD = document.querySelector('.CD'),
cdThumbAnimate = CD.animate([
	{transform: 'rotate(360deg)'}
	],{
		duration: 10000,
		iterations: Infinity
	})
cdThumbAnimate.pause()
const Music = {
	idSong: 0,
	isPlaying : false,
	HandleChangeSong : function() {
		buttonNextSong.onclick = () => {
			Music.idSong++
			if (Music.idSong > listSongGym.length - 1) {
				Music.idSong = 0
			}
			audio.src = listSongGym[Music.idSong].src
			titleSongPlay.textContent = listSongGym[Music.idSong].titleSong
			Music.playMusic()
			Music.showPlaying()
		}
		buttonPrevSong.onclick = () => {
			Music.idSong--
			if (Music.idSong < 0) {
				Music.idSong = listSongGym.length - 1
			}
			audio.src = listSongGym[Music.idSong].src
			titleSongPlay.textContent = listSongGym[Music.idSong].titleSong
			Music.playMusic()
			Music.showPlaying()
		}
	},

	loadFirstSong : function() {
		Playing[0].style.display = 'block'
		audio.src = listSongGym[Music.idSong].src
		titleSongPlay.textContent = listSongGym[Music.idSong].titleSong
		playButton.onclick = () => {
			if (Music.isPlaying === false) {
				Music.playMusic()
			}else{
				Music.pauseMusic()
			}
		}
		Music.handleProgress()
		Music.HandleChangeSong()
	},

	playMusic : function() {
		audio.play()
		Music.isPlaying = true
		playButton.setAttribute('name','pause-outline')
		cdThumbAnimate.play()
		
	},

	pauseMusic : function(){
		audio.pause()
		Music.isPlaying = false
		playButton.setAttribute('name','play-outline')
		cdThumbAnimate.pause()

	},

	handleProgress : function() {
		if (audio) {
			audio.onloadedmetadata = () => {
				const minutes = Math.floor(audio.duration / 60) 
				const seconds = Math.floor(audio.duration) - Math.round(minutes * 60) 
				lengthAudioMinutes.textContent = `${minutes}:`
				lengthAudioSeconds.textContent = seconds
				audio.ontimeupdate = () => {
					const percent = Math.floor(audio.currentTime * 100 / audio.duration)
					progressInput.value = percent
					if (audio.currentTime === audio.duration) {
						Music.idSong++
						audio.src = listSongGym[Music.idSong].src
						Music.showPlaying(Music.idSong)
						titleSongPlay.textContent = listSongGym[Music.idSong].titleSong
						Music.playMusic()
					}
				}
				progressInput.onchange = (e) => {
					if (audio.duration) {
						const currentTimeSong = audio.duration * ( e.target.value / 100)
						audio.currentTime = currentTimeSong
					}
					if (progressInput.value === 100) {
						Music.idSong++
						audio.src = listSongGym[Music.idSong].src
						showPlaying(Music.idSong)
						titleSongPlay.textContent = listSongGym[Music.idSong].titleSong
						Music.playMusic()
					}
				}
			}
		}
	},

	ShowMusic : function() {
		playList.style.display = 'block'
		playSong.style.display = 'flex'
	},

	showPlaying : function() {
		Playing.forEach((e,i) => {
			if (i === Music.idSong) {
				Playing[i].style.display = 'block'
			}else{
				Playing[i].style.display = 'none'
			}
		})
	},

	startMusic : function() {
		playSong.style.display = 'flex'
		Music.loadFirstSong()
		volumeButton.onclick = () => {
			const currentVolume = audio.volume
			if (audio.volume !== 0) {
				audio.volume = 0
				volumeButton.setAttribute('name','volume-mute-outline')
			}else {
				audio.volume = 1
				volumeButton.setAttribute('name','volume-medium-outline')
			}
		}
		buttonPlayInList.forEach((e,i) => { 
			e.onclick = () => {
				Music.idSong = e.value - 1
				audio.src = listSongGym[Music.idSong].src
				titleSongPlay.textContent = listSongGym[Music.idSong].titleSong
				Music.playMusic()
				Music.HandleChangeSong()
				Music.showPlaying()
				Music.handleProgress()
			}
		})
	}
}

Music.startMusic()

const video = document.querySelector('.video1')
const buttonNextVideo = document.querySelector('.button-next-video')
const buttonPrevVideo = document.querySelector('.button-back-video')
const Video = {
	idVideo : 0, 
	nextVideo : function() {
		buttonNextVideo.onclick = () => {
			Video.idVideo++
			if (Video.idVideo > listVideo.length - 1) {
				Video.idVideo = 0
				video.src = listVideo[Video.idVideo].src
			}else{
				video.src = listVideo[Video.idVideo].src
			}
		}
	},
	prevVieo : function() {
		buttonPrevVideo.onclick = () => {
			Video.idVideo--
			if (Video.idVideo < 0) {
				Video.idVideo = listVideo.length - 1
				video.src = listVideo[Video.idVideo].src
			}else{
				video.src = listVideo[Video.idVideo].src
			}
		}
	},
	startVideo : function(){
		video.src = listVideo[Video.idVideo].src
		Video.nextVideo()
		Video.prevVieo()
	}
}
Video.startVideo()