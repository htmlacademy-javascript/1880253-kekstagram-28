import { isEscapeKey } from './util.js';
import { hashtagInput, commentInput } from './validation.js';
import { showFullSuccessAlert, successMessageBtn, closeMessageHandler } from './util.js';
import { resetImage } from './no-ui-slider.js';
import { clearFields } from './validation.js';

const imageToChange = document.querySelector('.img-upload__preview img');
const fileHandler = new FileReader();
const uploadImageInput = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const closeEditorButton = document.querySelector('.img-upload__cancel');
const scaleControl = document.querySelector('.scale__control--value');
const fieldInFocus = () => document.activeElement === hashtagInput || document.activeElement === commentInput;

const resetImageSize = () => {
  imageToChange.style.transform = 'scale(1)';
  scaleControl.setAttribute('value', '100%');
};

const onOverlayKeydown = (evt) => {
  if (isEscapeKey(evt) && !fieldInFocus()) {
    evt.preventDefault();
    overlay.classList.add('hidden');
    uploadImageInput.value = '';
    document.querySelector('body').classList.remove('modal-open');
    clearFields();
    resetImageSize();
  }
};


const closeEditor = (item) => {
  item.addEventListener('click', () => {
    overlay.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onOverlayKeydown);
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    uploadImageInput.value = '';
    document.querySelector('#effect-none').click();
    resetImageSize();
  });
};

const changeImageToEdit = () => {
  overlay.classList.remove('hidden');
  fileHandler.onload = function () {
    document.querySelector('body').classList.add('modal-open');
    document.addEventListener('keydown', onOverlayKeydown);
    imageToChange.src = fileHandler.result;
  };
  fileHandler.readAsDataURL(uploadImageInput.files[0]);
  closeEditor(closeEditorButton);
};

const closeAndResetForm = () => {
  overlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onOverlayKeydown);
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  uploadImageInput.value = '';
  resetImage();
  resetImageSize();
  clearFields();
  showFullSuccessAlert();
  closeMessageHandler(successMessageBtn);
};

uploadImageInput.addEventListener('change', changeImageToEdit);

export { imageToChange, closeEditor, closeAndResetForm, resetImageSize };
