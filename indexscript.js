const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')
const avadiv = document.getElementById('avatardescriptiondiv')
const img = document.getElementById('imgdiv')
const togglemode = document.getElementById('lantern')
const lanternimg = document.getElementById('lanternimg')

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

// DARK MODE

let isdark = false

togglemode.addEventListener('click', () => {
    if (isdark) {
        isdark = false
        lanternimg.src = "lantern_dark.webp";
        document.documentElement.style.setProperty('--mcgray', '#393E46');
        document.documentElement.style.setProperty('--mcblack', '#222831');
        document.documentElement.style.setProperty('--mcyellow', '#e4964e');
        document.documentElement.style.setProperty('--mcorange', '#027B7F');
        document.documentElement.style.setProperty('--mctext', '#222831');
        document.documentElement.style.setProperty('--mctexthover', '#d6bc8c');
        document.documentElement.style.setProperty('--mctextnav', '#e4964e');
    } else {
        isdark = true
        lanternimg.src = "lantern_light.webp";
        document.documentElement.style.setProperty('--mcyellow', '#027B7F');
        document.documentElement.style.setProperty('--mcyellow', '#027B7F');
        document.documentElement.style.setProperty('--mcyellow', '#027B7F');
        document.documentElement.style.setProperty('--mcyellow', '#027B7F');
        document.documentElement.style.setProperty('--mcyellow', '#027B7F');
    }


})