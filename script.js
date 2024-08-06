//Menu vars//
const navbar = document.querySelector('.navbar');
const menuButtom = document.querySelector('.menu-buttom');

//Menu code//
menuButtom.addEventListener('click', () => {
    navbar.classList.toggle('show-menu')
});

//comments carousel//
let currentSlide = 0;

function moveSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    currentSlide = (currentSlide + 1) % totalSlides;

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(moveSlide, 3000); 

document.querySelectorAll('a[href^="#"').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});