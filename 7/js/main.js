import { placePictures, photoArray } from './render-pictures.js';
import { hideCounters } from './open-popup.js';

document.querySelector('.pictures__title').classList.remove('visually-hidden');

placePictures(photoArray);
hideCounters();
