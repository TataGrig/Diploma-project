const menuButton = document.querySelector(".navbar-burger");

  menuButton.addEventListener('click', 
  function () {
    console.log('Клик по кнопке меню');
    const navbarMenu = document.querySelector(".navbar-menu");
    navbarMenu.classList.toggle("navbar-menu_visible");
    const body = document.querySelector("body");
    body.classList.toggle("body_stop_scrolling");
  });

const likeButton = document.querySelector(".recommend__book-like");

  likeButton.addEventListener('click', 
  function () {
    console.log('Клик по кнопке меню');
    likeButton.classList.toggle("recommend__book-like_red");
  });