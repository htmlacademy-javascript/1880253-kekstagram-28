import { placePictures, photoArray } from './render-pictures.js';
import './form-handler.js';

document.querySelector('.pictures__title').classList.remove('visually-hidden');

placePictures(photoArray);
