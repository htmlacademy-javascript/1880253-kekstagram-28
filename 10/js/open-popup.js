import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeBigPicture = bigPicture.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
};

const closePicturePopup = function (item) {
  item.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
    document.querySelector('.comments-loader').classList.remove('hidden');
  });
};

const openPicturePopup = function () {
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

};

export { openPicturePopup, closePicturePopup, bigPicture, closeBigPicture };
