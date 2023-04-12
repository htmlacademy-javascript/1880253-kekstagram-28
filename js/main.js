import { closeAndResetForm } from './form-handler.js';
import './image-manipulation.js';
import './no-ui-slider.js';
import { setUserFormSubmit } from './validation.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { initializePhotos } from './filters.js';

getData()
  .then((posts) => {
    initializePhotos(posts);
  }).catch((err) => {
    showAlert(err.message);
  });

setUserFormSubmit(closeAndResetForm);
