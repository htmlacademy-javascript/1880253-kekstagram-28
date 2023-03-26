import { createPhotoArray } from './data.js';
import { openPicturePopup, closePicturePopup } from './open-popup.js';
import { renderBigPictureInfo } from './render-comments.js';

const allPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.cloneNode(true);
const pictureFragment = document.createDocumentFragment();

const photoArray = createPhotoArray();

const placePictures = function (photos) {
  photos.forEach(({ url, likes, description, comments }) => {
    const newPictureTemplate = pictureTemplate.cloneNode(true);
    newPictureTemplate.querySelector('.picture__img').src = url;
    newPictureTemplate.querySelector('.picture__img').alt = description;
    newPictureTemplate.querySelector('.picture__likes').textContent = likes;
    newPictureTemplate.querySelector('.picture__comments').textContent = comments.length;
    pictureFragment.append(newPictureTemplate);
  });
  if (allPictures) {
    allPictures.append(pictureFragment);
    const picture = document.querySelectorAll('.picture');
    for (let i = 0; i < picture.length; i++) {
      const eachPicture = picture[i];
      eachPicture.addEventListener('click', (evt) => {
        evt.preventDefault();
        openPicturePopup();
        renderBigPictureInfo(photos[i]);
      });
    }
    closePicturePopup();
  }
};

export { placePictures, photoArray };
