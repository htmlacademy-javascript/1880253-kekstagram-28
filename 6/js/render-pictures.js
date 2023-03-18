import { createPhotoArray } from './data.js';

// createPhotoArray();

const allPictures = document.querySelector('.pictures');

document.querySelector('.pictures').querySelector('.pictures__title').classList.remove('visually-hidden');

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

  allPictures.append(pictureFragment);
};

export { placePictures, photoArray };
