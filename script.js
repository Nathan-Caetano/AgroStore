//Menu vars//
const navbar = document.querySelector('.navbar');
const menuButtom = document.querySelector('.menu-buttom');

//Menu code//
menuButtom.addEventListener('click', () => {
    navbar.classList.toggle('show-menu')
});