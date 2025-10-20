'use strict';

const mainPicture = document.querySelector('#largeImg');

const ul = document.querySelector('#thumbs');

if (ul) {
    ul.addEventListener('click', (evnt) => {
    const thumbnail = evnt.target.closest('.list-item__link');

    if (!thumbnail) {
      return;
    }

    evnt.preventDefault();

    if (mainPicture) {
      mainPicture.src = thumbnail.getAttribute('href');
    }
  });
}
