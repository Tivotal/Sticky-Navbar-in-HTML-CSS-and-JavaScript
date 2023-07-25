/* Created by Tivotal */

let nav = document.querySelector("nav");

//when document is scrolled
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
