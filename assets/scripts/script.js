const menuIcon = document.querySelector('.menu')
const closMenuIcon = document.querySelector('.close-menu')
const dropDown = document.querySelector('.varying')
const navBtn = document.querySelectorAll('.nav-btn')

menuIcon.addEventListener('click', () => {
    dropDown.classList.toggle('active')
})

closMenuIcon.addEventListener('click', () => {
    dropDown.classList.toggle('active')
})

navBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        dropDown.classList.remove('active')
    })
})
