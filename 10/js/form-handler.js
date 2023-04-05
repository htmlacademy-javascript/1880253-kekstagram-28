import { isEscapeKey } from './util.js';
import { hashtagInput, commentInput } from './validation.js';

const imageToChange = document.querySelector('.img-upload__preview img');
const fileHandler = new FileReader();
const uploadImageInput = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const closeEditorButton = document.querySelector('.img-upload__cancel');

const fieldInFocus = () => document.activeElement === hashtagInput || document.activeElement === commentInput;

const onOverlayKeydown = (evt) => {
  if (isEscapeKey(evt) && !fieldInFocus()) {
    evt.preventDefault();
    overlay.classList.add('hidden');
    uploadImageInput.value = '';
    document.querySelector('body').classList.remove('modal-open');
  }
};


const closeEditor = function (item) {
  item.addEventListener('click', () => {
    overlay.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onOverlayKeydown);
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    uploadImageInput.value = '';
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

uploadImageInput.addEventListener('change', changeImageToEdit);

export { imageToChange };
