var body = document.querySelector("body");
var toggler = document.querySelector(".toggler");
var navigation = document.querySelector(".navigation__list");

body.classList.remove("no-js");

toggler.addEventListener("click", function(evt) {
  evt.preventDefault();
  navigation.classList.toggle("navigation__list--show");
  toggler.classList.toggle("toggler--menu");
  toggler.classList.toggle("toggler--cross")
})
