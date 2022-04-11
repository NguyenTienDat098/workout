const menuMobile = document.querySelector('.menu-icon');
const iconChangeLight = document.querySelector('.moon-sun');
const menuMobileContainer = document.querySelector('.menu-mobile');
const menuMobileView = document.querySelector('.footer');
const itemMenu = document.querySelectorAll('.footer ion-icon');
const menuSocial = document.querySelectorAll('.menu-social ion-icon');
const clockTimer = document.querySelector('.clockTimer');
const listSong = document.querySelector('.list-song');

menuMobileView.style.display = 'none'
menuMobile.onclick = () => {
	if (menuMobileView.style.display === 'none') {
		menuMobileView.style.display = 'flex'
	}else{
		menuMobileView.style.display = 'none'
	}
}

var isDark = true
const songGym = document.querySelector('.song-gym');
const viewSong = document.querySelector('.view-song');
const motivation = document.querySelector('.Motivation');
const darkBg = 'url(../imgs/mobileGym.jpg)'
const lightBg = 'url(../imgs/LightBg5.jpg)'
const header = document.querySelector('.header');
const colorIconOld = {
	color: '#000',
	backgroundColor: 'rgba(255, 255, 255, 0.2)'
}
const styleLight = {
	color: '#000',
	background: '#fff'
}
const styleDark = {
	color: '#fff',
	background: '#000'
}

iconChangeLight.onclick = () => {
	if (isDark === true) {
		isDark = false
		if (window.innerWidth < 450) {
			header.style.background = `${lightBg} 0% 50%`
			header.style.backgroundSize = 'cover'
			header.style.backgroundRepeat = 'no-repeat'
		}
		menuSocial.forEach((e,i) => {
			if (i === 0) {
				e.style.color = '#0984e3'
				e.style.background = '#fff'
			}
			if (i === 1) {
				e.style.color = '#2d3436'
				e.style.background = '#fff'
			}
			if (i === 2) {
				e.style.color = '#00cec9'
				e.style.background = '#fff'
			}
			if (i === 3) {
				e.style.color = '#d63031'
				e.style.background = '#fff'
			}
		})
		Object.assign(songGym.style,styleLight); 
		Object.assign(viewSong.style,styleLight); 
		Object.assign(motivation.style,styleLight); 
		Object.assign(menuMobileContainer.style,styleLight); 
		Object.assign(iconChangeLight.style,styleLight); 
		Object.assign(menuMobile.style,styleLight); 
		Object.assign(menuMobileView.style,styleLight); 
		itemMenu.forEach((e,i) => {
			Object.assign(e.style,styleLight); 	
		})
		clockTimer.style.background = 'rgba(0,0,0,0.5)'
		clockTimer.style.color = '#fff'
		listSong.style.background = 'rgba(0,0,0,0.5)'
		listSong.style.color = '#fff'
	}
	else if (isDark === false) {
		isDark = true
		if (window.innerWidth < 450) {
			header.style.background = `${darkBg}`
			header.style.backgroundSize = 'cover'
			header.style.backgroundRepeat = 'no-repeat'
		}
		menuSocial.forEach((e,i) => {
			Object.assign(e.style,colorIconOld); 
		})
		Object.assign(songGym.style,styleDark); 
		Object.assign(viewSong.style,styleDark); 
		Object.assign(motivation.style,styleDark); 
		Object.assign(menuMobileContainer.style,styleDark); 
		Object.assign(iconChangeLight.style,styleDark); 
		Object.assign(menuMobile.style,styleDark); 
		Object.assign(menuMobileView.style,styleDark); 
		itemMenu.forEach((e,i) => {
			Object.assign(e.style,styleDark); 
		})
		clockTimer.style.background = 'rgba(255,255,255,0.1)'
		clockTimer.style.color = '#fff'
		listSong.style.background = 'rgba(255,255,255,0.1)'
		listSong.style.color = '#fff'
	}
}


