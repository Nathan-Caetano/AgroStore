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

//Animações//

let target = null;
document.addEventListener("DOMContentLoaded",function(){
    target = document.querySelectorAll('[data-anime]');
})

const animationClass ='animate'

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    target.forEach(function(element){
        if((windowTop)>element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }

    });
}

window.addEventListener('scroll', function() {
    animeScroll();
})

let targetBlur = null;
document.addEventListener("DOMContentLoaded",function(){
    targetBlur = document.querySelectorAll('[data-background]');
})

const blurClass = 'blur'

function blurScroll() {
    const windowTop = window.pageYOffset;
    targetBlur.forEach(function(element){
        if((windowTop)>element.offsetTop){
            element.classList.add(blurClass);
        }else{
            element.classList.remove(blurClass);
        }

    });
}

window.addEventListener('scroll', function() {
    blurScroll();
})