window.addEventListener('DOMContentLoaded', function () {


    const burgerBtn = document.querySelector('.header-burger'),
    mobileMenu = document.querySelector('.header-nav__mobile'),
    menuItems = document.querySelectorAll('.menu-mobile'),
    mobileMenuClose = document.querySelector('.mobile-menu_close');
    console.log(menuItems);
 

burgerBtn.addEventListener('click', function () {

    
    mobileMenu.classList.add('menu-animate');
});
mobileMenuClose.addEventListener('click', function () {

    mobileMenu.classList.toggle('menu-animate');
 

});

mobileMenu.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('menu-mobile')) {

                mobileMenu.classList.remove('menu-animate');


    }

});
});