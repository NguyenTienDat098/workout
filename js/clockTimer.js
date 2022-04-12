import {backIcon} from './showPlayList.js'
const buttonCountTime = document.querySelector('.start-pause');
const buttonResetTime = document.querySelector('.reset');
const hoursT = document.querySelector('.hourss');
const minutesT = document.querySelector('.minutess');
const secondsT = document.querySelector('.secondss');
const clock = document.querySelector('.clock');
const clockTimer = document.querySelector('.clockTimer');
let timerSeconds = 0
let timerMinutes = 0
let timerHours = 0
let isCounting = false

buttonCountTime.onclick = () => {
	if (isCounting === false) {
		isCounting = true
		buttonCountTime.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'

	}else if (isCounting === true){
		isCounting = false
		buttonCountTime.innerHTML = '<ion-icon name="play-outline"></ion-icon>'
	}	
	StartCount()
}

function StartCount() {
	var interval = setInterval(() => {
		countTime(isCounting,interval)
	},1000)
}

function renderTime(s,m,h) {
	secondsT.textContent = s
	minutesT.textContent = `${m} :`
	hoursT.textContent = `${h} :`
}

function countTime(isCounting,interval) {
	if (isCounting) {
		if (timerSeconds === 60) {
			timerSeconds = 0 
			timerMinutes+=1
		}
		if (timerMinutes === 60) {
			timerMinutes = 0
			timeHours+=1
		}
		timerSeconds+=1
		renderTime(timerSeconds,timerMinutes,timerHours)
	}else{
		clearInterval(interval)
	}
}

buttonResetTime.onclick = () => {
	isCounting = false
	buttonCountTime.innerHTML = '<ion-icon name="play-outline"></ion-icon>'
	timerSeconds = 0
	timerMinutes = 0
	timerHours = 0
	renderTime(timerSeconds,timerMinutes,timerHours)
}

clock.onclick = () => {
	clockTimer.classList.add('isopen')
	backIcon.style.display = 'block'
}

export {clockTimer}

