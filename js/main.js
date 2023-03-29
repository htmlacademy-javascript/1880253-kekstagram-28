import { placePictures, photoArray } from './render-pictures.js';

document.querySelector('.pictures__title').classList.remove('visually-hidden');

placePictures(photoArray);

