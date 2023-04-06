import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH, MAX_HASHTAGS_AMOUNT } from './data.js';

const form = document.querySelector('.img-upload__form');
const commentInput = form.querySelector('.text__description');
const textContent = document.querySelector('.img-upload__text');
const hashtagInput = textContent.querySelector('.text__hashtags');


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

pristine.addValidator(hashtagInput, isValidHashtag, 'Хештег невалиден');

const isDublicate = (item) => {
  item.toLowerCase();
  const arrayOfHashtags = item.split(' ');
  let result = true;
  const setOfHashtags = new Set(arrayOfHashtags);
  if (setOfHashtags.size < arrayOfHashtags.length) {
    result = false;
  }
  return result;
};

pristine.addValidator(hashtagInput, isDublicate, 'Дубликаты запрещены');

const isOversize = (item) => {
  const arrayOfHashtags = item.split(' ');
  let result = true;
  if (arrayOfHashtags.length > 5) {
    result = false;
  }
  return result;
};

pristine.addValidator(hashtagInput, isOversize, `Максимальное количество хэштегов - ${MAX_HASHTAGS_AMOUNT}`);


form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

export { commentInput, hashtagInput, form };
