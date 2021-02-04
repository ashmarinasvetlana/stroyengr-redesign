window.addEventListener('DOMContentLoaded', function () {


    const burgerBtn = document.querySelector('.header-burger'),
    mobileMenu = document.querySelector('.header-nav__mobile'),
    mobileMenuClose = document.querySelector('.mobile-menu_close');
 

burgerBtn.addEventListener('click', function () {

    
    mobileMenu.classList.add('menu-animate');
});
mobileMenuClose.addEventListener('click', function () {

    mobileMenu.classList.toggle('menu-animate');
 

});

});

