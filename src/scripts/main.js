'use strict';

const mainPicture = document.querySelector('#largeImg');

const ul = document.querySelector('#thumbs');

ul.addEventListener('click', (event) => {
  const thumbnail = event.target.closest('.list-item__link');

  if (!thumbnail) return;

  event.preventDefault();

  mainPicture.src = thumbnail.href; // ==> (.getAttribute('href'))
});

