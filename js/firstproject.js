const navBtn = document.getElementById('nav-btn')
const navbar = document.getElementById('navbar')
const navclose = document.getElementById('nav-close')
const navbaroverlay = document.querySelector('.navbar-overlay')
const formoverlay = document.querySelectorAll('.form-overlay')


//display navbar

navBtn.addEventListener('click', function () {
    navbar.classList.add('show-navbar')
    //activate overlay

    navbaroverlay.classList.add('overlay-active')
})

navclose.addEventListener('click', function () {
    navbar.classList.remove('show-navbar')
    navbaroverlay.classList.remove('overlay-active')
})

navbaroverlay.addEventListener('click', function () {
    if (navbar.classList.contains('show-navbar')) {
        navbar.classList.remove('show-navbar')
        navbaroverlay.classList.remove('overlay-active')
    }
})

// label translateY

formoverlay.forEach(function (overlay) {
    const active = overlay.querySelector('.inputt')

    active.addEventListener('click', function () {

        formoverlay.forEach(function (item) {
            if (item !== overlay) {
                item.classList.remove('active-label')
            }
        })
        overlay.classList.toggle('active-label')
    })
})


