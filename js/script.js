var typed = new Typed(".typing", {
    strings: ["", "Web Developer", "Web Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

const hamMenu = document.querySelector('.nav-toggler');
const offScreenMenu = document.querySelector('.offScreenMenu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
