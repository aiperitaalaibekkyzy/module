$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.hamburger').toggleClass('is-active');
        $('.header__dropMenu').toggleClass('menu-active');
        $('body').toggleClass('no-scroll')
    });
    new Swiper('')
    });