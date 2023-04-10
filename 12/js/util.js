import { ALERT_SHOW_TIME } from './data.js';

// Функция генерации ID
function createIdGenerator() {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generateId = createIdGenerator();
const generatePhotoId = createIdGenerator();

// Функция генерации числа в диапазоне
function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.ceil(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// Функция создания случайного числа в диапазоне без повторения
function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      return null;
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const isEscapeKey = (evt) => evt.key === 'Escape';

const alertStyles = {
  zIndex: 100,
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  padding: '10px 3px',
  fontSize: '22px',
  lineHeight: '36px',
  textAlign: 'center',
};

const createAlert = (message, backgroundColor) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.backgroundColor = backgroundColor;

  Object.assign(alertContainer.style, alertStyles);

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showAlert = (message) => {
  createAlert(message, 'red');
};

const showSuccessAlert = (message) => {
  createAlert(message, 'green');
};

// Для фильтра
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const copyArray = (array) => array.slice();

const removeArrayElement = (array, value) => array.filter((element) => element !== value);

const removeElementsFromContainer = (containerSelector, elementSelector) => {
  const elements = containerSelector.querySelectorAll(elementSelector);
  elements.forEach((element) => element.remove());
};

export { generateId, generatePhotoId, createRandomIdFromRangeGenerator, getRandomInteger, isEscapeKey, showAlert, showSuccessAlert, shuffleArray, copyArray, removeArrayElement, removeElementsFromContainer };
