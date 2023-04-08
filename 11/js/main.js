import { placePictures } from './render-pictures.js';
import { closeAndResetForm } from './form-handler.js';
import './form-handler.js';
import './image-manipulation.js';
import './no-ui-slider.js';
import { setUserFormSubmit } from './validation.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

getData()
  .then((posts) => {
    placePictures(posts);
  }).catch((err) => {
    showAlert(err.message);
  });

setUserFormSubmit(closeAndResetForm);
