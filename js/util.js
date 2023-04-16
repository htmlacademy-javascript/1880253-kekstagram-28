const isEscapeKey = (evt) => evt.key === 'Escape';

const successMessage = document.querySelector('#success').content.querySelector('.success');
const successMessageBtn = document.querySelector('#success').content.querySelector('.success__button');

const errorMessage = document.querySelector('#error').content.querySelector('.error');
const errorMessageBtn = document.querySelector('#error').content.querySelector('.error__button');

// Сообщение об успехе
const showSuccessAlert = () => {
  let result = false;
  return () => {
    if (!result) {
      result = true;
      document.body.append(successMessage);
    } else {
      const successMessageClone = document.querySelector('.success');
      successMessageClone.classList.remove('hidden');
    }
  };
};

const showFullSuccessAlert = showSuccessAlert();

// Сообщение об ошибке
const showErrorMessage = () => {
  let result = false;
  return () => {
    if (!result) {
      result = true;
      document.body.append(errorMessage);
    } else {
      const errorMessageClone = document.querySelector('.error');
      errorMessageClone.classList.remove('hidden');
    }
  };
};

const showFullErrorMessage = showErrorMessage();

const hideModalMessages = () => {
  successMessage.classList.add('hidden');
  errorMessage.classList.add('hidden');
};

const onBodyClick = (evt) => {
  evt.stopPropagation();
  if (evt.target.matches('.success') || evt.target.matches('.error')) {
    hideModalMessages();
    document.removeEventListener('click', onBodyClick);
  }
};

const onCloseBtnClick = () => {
  hideModalMessages();
};

const onEscapePress = (evt) => {
  if (isEscapeKey(evt)) {
    hideModalMessages();
    document.removeEventListener('keydown', onEscapePress);
  }
};

const closeMessageHandler = (button) => {
  button.addEventListener('click', onCloseBtnClick);
  document.addEventListener('keydown', onEscapePress);
  document.addEventListener('click', onBodyClick);
};


// Для фильтра
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
const copyArray = (array) => array.slice();

const removeElementsFromContainer = (containerSelector, elementSelector) => {
  const elements = containerSelector.querySelectorAll(elementSelector);
  elements.forEach((element) => element.remove());
};

export { isEscapeKey, showFullErrorMessage, showFullSuccessAlert, shuffleArray, copyArray, removeElementsFromContainer, successMessageBtn, errorMessageBtn, closeMessageHandler };
