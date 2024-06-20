const navbar = document.querySelector('.navbar');
const menuButtom = document.querySelector('.menu-buttom');

menuButtom.addEventListener('click', () => {
    navbar.classList.toggle('show-menu')
});