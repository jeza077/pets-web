'use strict';

//** TIMER */
window.onload = function() {
  let time = 60 * 20.8; // Tiempo en segundos (1 hora)
  const display = document.querySelector('.timer');

  const timer = setInterval(function () {
    const hours = parseInt(time / 3600, 10);
    const minutes = parseInt((time % 3600) / 60, 10);
    const seconds = parseInt(time % 60, 10);

    document.getElementById('hours').textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? "0" + seconds : seconds;

    if (--time < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

// /**
//  * add event on element
//  */

// const addEventOnElem = function (elem, type, callback) {
//   if (elem.length > 1) {
//     for (let i = 0; i < elem.length; i++) {
//       elem[i].addEventListener(type, callback);
//     }
//   } else {
//     elem.addEventListener(type, callback);
//   }
// }



// /**
//  * navbar toggle
//  */

// const navToggler = document.querySelector("[data-nav-toggler]");
// const navbar = document.querySelector("[data-navbar]");
// const navbarLinks = document.querySelectorAll("[data-nav-link]");

// const toggleNavbar = function () {
//   navbar.classList.toggle("active");
//   navToggler.classList.toggle("active");
// }

// addEventOnElem(navToggler, "click", toggleNavbar);


// const closeNavbar = function () {
//   navbar.classList.remove("active");
//   navToggler.classList.remove("active");
// }

// addEventOnElem(navbarLinks, "click", closeNavbar);



// /**
//  * active header when window scroll down to 100px
//  */

// const header = document.querySelector("[data-header]");
// const backTopBtn = document.querySelector("[data-back-top-btn]");

// const activeElemOnScroll = function () {
//   if (window.scrollY > 100) {
//     header.classList.add("active");
//     backTopBtn.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     backTopBtn.classList.remove("active");
//   }
// }

// addEventOnElem(window, "scroll", activeElemOnScroll);