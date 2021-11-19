const menuButton = document.querySelector(".navbar-burger");

  menuButton.addEventListener('click', 
  function () {
    console.log('Клик по кнопке меню');
    const navbarMenu = document.querySelector(".navbar-menu");
    navbarMenu.classList.toggle("navbar-menu_visible");
    const body = document.querySelector("body");
    body.classList.toggle("body_stop_scrolling");
  });

const likeButtons = document.querySelectorAll(".recommend__book-like");


  likeButtons.forEach(likeButton=>{
    likeButton.addEventListener('click', 
      function () {
        console.log('Клик по кнопке меню');
        likeButton.classList.toggle("recommend__book-like_red");
      }
    );
  })
  

const swiper = new Swiper('.swiper', {
  loop: false,
  autoHeight: true,
  slidesPerView: 4,
  spaceBetween: 26,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-arrow--right',
    prevEl: '.swiper-arrow--left',
  },
}),
  // breakpoints: {
  //     1200: {
  //       slidesPerView: 4,
  //       loopedSlides: 4,
  //       spaceBetween: 10
  //     },
  //     992: {
  //       slidesPerView: 3,
  //       loopedSlides: 3,
  //       spaceBetween: 10
  //     },
  //     768: {
  //       slidesPerView: 2,
  //       loopedSlides: 2,
  //       spaceBetween: 10
  //     },
  //     576: {
  //       slidesPerView: 1,
  //       loopedSlides: 1,
  //       spaceBetween: 20,
  //     }
  //   }
const bookSlider = new Swiper('.unreliesed-swiper', {
  loop: false,
  slidesPerView: 5,

    // Navigation arrows
    navigation: {
      nextEl: '.unreliesed-button_right',
      prevEl: '.unreliesed-button_left',
    },

    // effect: 'coverflow',
    // },
});
