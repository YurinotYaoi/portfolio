const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')
const avadiv = document.getElementById('avatardescriptiondiv')
const img = document.getElementById('imgdiv')

const media=window.matchMedia("(width <= 860px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
    // console.log(e)
    const isMobile = e.matches
    console.log(isMobile) 

    if(isMobile) {
        navbar.setAttribute('inert','')
        avadiv.classList.remove('animate__bounceInRight')
        avadiv.classList.add('animate__backInUp')
        img.classList.remove('animate__fadeInLeft')
        img.classList.add('animate__backInDown')

    } else {
        navbar.removeAttribute('inert')
        avadiv.classList.remove('animate__backInUp')
        avadiv.classList.add('animate__bounceInRight')
        img.classList.remove('animate__backInDown')
        img.classList.add('animate__fadeInLeft')
    }
}

function openSidebar(){
    navbar.classList.add('show')
    openButton.setAttribute('aria-expanded', 'true')
    navbar.removeAttribute('inert')
}

function closeSidebar(){
    navbar.classList.remove('show')
    openButton.setAttribute('aria-expanded', 'false')
    navbar.setAttribute('inert','')
}

updateNavbar(media)