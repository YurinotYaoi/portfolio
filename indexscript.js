// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// Navbar
const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')
const ol = document.getElementById('overlay')

// Darkmode Switcher
let darkmode = localStorage.getItem('darkmode')
const themeswitch = document.getElementById('themeswitcher')
const lantern = document.getElementById('lanternimg')
const pig = document.getElementById('pigimg')

const media=window.matchMedia("(width <= 860px)")


media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
    // console.log(e)
    const isMobile = e.matches
    console.log("Device:",isMobile) 

    if(isMobile) {
        navbar.setAttribute('inert','')
    } else {
        navbar.removeAttribute('inert')
    }
}

function openSidebar(){
    navbar.classList.add('show')
    ol.classList.add('shownoverlay')
    openButton.setAttribute('aria-expanded', 'true')
    navbar.removeAttribute('inert')
    ol.classList.remove('hiddenoverlay')
}

function closeSidebar(){
    navbar.classList.remove('show')
    ol.classList.add('hiddenoverlay')
    openButton.setAttribute('aria-expanded', 'false')
    navbar.setAttribute('inert','')
    ol.classList.remove('shownoverlay')
}

updateNavbar(media)

function enableDarkmode() {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
    lantern.src = "css/res/lantern_light.png"

    pig.src = "css/res/minecraft-sniffer.gif"
}

function disableDarkmode() {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
    lantern.src = "css/res/lantern_dark.png"

    pig.src = "css/res/minecraft-pig.gif"
}

if(darkmode === "active") {
    enableDarkmode()
}
themeswitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()    
})
