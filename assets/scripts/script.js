const menuIcon = document.querySelector('.menu')
const closMenuIcon = document.querySelector('.close-menu')
const dropDown = document.querySelector('.varying')
const navBtn = document.querySelectorAll('.nav-btn')
const animeDiv = document.querySelector('.scroll-to-side')

const autoScrollX = (el) => {
    let currentX = window.pageXOffset
    let targetX = document.getElementById(el)
        .getBoundingClientRect()
    console.log(`this is how far away the ${el} is from the left: ${targetX}`)
}

window.addEventListener('scroll', (e) => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight // this line gives you the scrollable heigh
    const scrolledY = window.scrollY
    const scrolledX = window.scrollX
    console.log('this is scrolledY', scrolledY)
    console.log('this is scrolledX', scrolledX)
    console.log('this is the scrollableHeight', scrollableHeight)
    if (window.scrollY == scrollableHeight) {
        // alert('you at the bottom')
        autoScrollX('.scroll-to-side')
    }
})

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
