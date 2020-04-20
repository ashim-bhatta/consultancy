const mob = document.getElementById('mob')
const body = document.getElementById('body')
const video = document.getElementById('main-videos')



var isNavOpen = false
isVideoOpen = false


const openMobNav = () =>{
    if(!isNavOpen){
        mob.style.right='0px'
        body.style.overflowY='hidden'
        isNavOpen = true

    }
    else{
        mob.style.right='-250px'
        isNavOpen = false
        body.style.overflowY='scroll'

    }
}

const toggleVideo = () =>{
  if(!isVideoOpen){
    video.style.display='flex'
    body.style.overflowY='hidden'
    isVideoOpen = true
  }
  else{
    video.style.display='none'
    body.style.overflowY='scroll'
    isVideoOpen = false
  }
}

var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 20) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }

}