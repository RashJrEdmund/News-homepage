let count = 0;

document.querySelector('.menu').addEventListener('click', () => {
    count++
    if(count%2 == 1) {
        document.querySelector(".varying").classList.toggle('active')
        document.querySelector(".menu").style.position = 'fixed'
    } else {
        document.querySelector(".varying").classList.toggle('active')
        document.querySelector(".menu").style.position = 'unset'
    }
})