'use strict';

(function () {
  var body = document.querySelector('body');
  var header = document.querySelector('.page-header');
  var toggler = document.querySelector('.toggler');
  var navigation = document.querySelector('.navigation__list');

  body.classList.remove('no-js');

  toggler.addEventListener('click', function (evt) {
    evt.preventDefault();
    navigation.classList.toggle('navigation__list--show');
    header.classList.toggle('page-header__show');
    toggler.classList.toggle('toggler--menu');
    toggler.classList.toggle('toggler--cross');
  });
})();
