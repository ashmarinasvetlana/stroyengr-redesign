var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  
  })
  var swiperWorks = new Swiper('.works-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        // init: false,
        loop: true,
        autoplay: {
      delay: 5000,
    },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          480: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }
      });