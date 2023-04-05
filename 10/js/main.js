import { placePictures, photoArray } from './render-pictures.js';
import './form-handler.js';
import './image-manipulation.js';
import './no-ui-slider.js';

document.querySelector('.pictures__title').classList.remove('visually-hidden');

placePictures(photoArray);
