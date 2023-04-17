import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH, MAX_HASHTAGS_AMOUNT } from './data.js';
import { showFullErrorMessage, errorMessageBtn, closeMessageHandler } from './util.js';
import { sendData } from './api.js';

const form = document.querySelector('.img-upload__form');
const commentInput = form.querySelector('.text__description');
const textContent = document.querySelector('.img-upload__text');
const hashtagInput = textContent.querySelector('.text__hashtags');
const hashtagIsInvalidMessage = 'Хештег невалиден';
const hashtagIsDublicateMessage = 'Дубликаты запрещены';
const hashtagIsOversizeMessage = `Максимальное количество хэштегов - ${MAX_HASHTAGS_AMOUNT}`;

const clearFields = () => {
  form.reset();
};

const pristineSettings = {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  successClass: 'img-upload__field-wrapper--success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'pristine-error',
};

const pristine = new Pristine(form, pristineSettings);

const validateComment = (value) => value.length >= MIN_COMMENT_LENGTH && value.length <= MAX_COMMENT_LENGTH;


const getCommentErrorMessage = () => {
  const max = MAX_COMMENT_LENGTH;
  return `Максимальная длинна комментария ${max} символов. Введено: ${commentInput.value.length}`;
};

pristine.addValidator(commentInput, validateComment, getCommentErrorMessage);

const isValidHashtag = (item) => {
  let result = true;
  if (!item) {
    return result;
  }
  const hashtagRegEx = /^#[a-zа-яё0-9]{1,19}$/i;
  const arrayOfHashtags = item.split(' ');
  arrayOfHashtags.forEach((element) => {
    if (!hashtagRegEx.test(element)) {
      result = false;
    }
  });
  return result;
};

pristine.addValidator(hashtagInput, isValidHashtag, hashtagIsInvalidMessage);

const isDublicate = (item) => {
  item = item.toLowerCase();
  const arrayOfHashtags = item.split(' ');
  let result = true;
  const setOfHashtags = new Set(arrayOfHashtags);
  if (setOfHashtags.size < arrayOfHashtags.length) {
    result = false;
  }
  return result;
};

pristine.addValidator(hashtagInput, isDublicate, hashtagIsDublicateMessage);

const isOversize = (item) => {
  const arrayOfHashtags = item.split(' ');
  let result = true;
  if (arrayOfHashtags.length > 5) {
    result = false;
  }
  return result;
};

pristine.addValidator(hashtagInput, isOversize, hashtagIsOversizeMessage);

const SubmitButtonText = {
  IDLE: 'Отправить',
  SENDING: 'Отправляю',
};

const submitButton = form.querySelector('.img-upload__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(() => {
          showFullErrorMessage();
          closeMessageHandler(errorMessageBtn);
        })
        .finally(unblockSubmitButton);
    }
  });
};

export { commentInput, hashtagInput, form, setUserFormSubmit, clearFields, pristine };
