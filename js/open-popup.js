import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeBigPicture = bigPicture.querySelector('.big-picture__cancel');


const hideCounters = () => {
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
};

const closePicturePopup = function () {
  closeBigPicture.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  });
};

const openPicturePopup = function () {
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

export { openPicturePopup, closePicturePopup, hideCounters, bigPicture };
