const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')
const ol = document.getElementById('overlay')
const avadiv = document.getElementById('avatardescriptiondiv')

const img = document.getElementById('imgdiv')
const lanternimg = document.getElementById('lanternimg')

const media=window.matchMedia("(width <= 860px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
    // console.log(e)
    const isMobile = e.matches
    console.log("Device:",isMobile) 

    if(isMobile) {
        navbar.setAttribute('inert','')

        // avadiv.classList.remove('animate__bounceInRight')
        // avadiv.classList.add('animate__backInUp')
        // img.classList.remove('animate__fadeInLeft')
        // img.classList.add('animate__backInDown')

    } else {
        navbar.removeAttribute('inert')

        // avadiv.classList.remove('animate__backInUp')
        // avadiv.classList.add('animate__bounceInRight')
        // img.classList.remove('animate__backInDown')
        // img.classList.add('animate__fadeInLeft')
    }
}

    ol.classList.add('hiddenoverlay')
    ol.classList.remove('shownoverlay')

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

// DARK MODE

let isdark = false
console.log("Dark:", isdark)

function darkmode(){
    if (isdark) {
        isdark = false
        
        lanternimg.src = "css/res/lantern_dark.png";
        document.documentElement.style.setProperty('--mcgray', '#393E46');
        document.documentElement.style.setProperty('--mcblack', '#222831');
        document.documentElement.style.setProperty('--mcyellow', '#e4964e');
        document.documentElement.style.setProperty('--mcorange', '#027B7F');
        document.documentElement.style.setProperty('--mctext', '#222831');
        document.documentElement.style.setProperty('--mctexthover', '#d6bc8c');
        document.documentElement.style.setProperty('--mctextnav', '#e4964e');
        console.log("Dark:", isdark)

    } else {
        isdark = true
        lanternimg.src = "css/res/lantern_light.png";
        document.documentElement.style.setProperty('--mcyellow', '#027B7F');
        document.documentElement.style.setProperty('--mcyellow', '#027B7F');
        document.documentElement.style.setProperty('--mcyellow', '#027B7F');
        document.documentElement.style.setProperty('--mcyellow', '#027B7F');
        document.documentElement.style.setProperty('--mcyellow', '#027B7F');
        console.log("Dark:", isdark)

    }
}    
