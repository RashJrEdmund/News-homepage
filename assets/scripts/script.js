let menuImg = document.querySelector('.menu')

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector(".varying").classList.toggle('active')
    menuImg.style.heigth = "3300px"
})