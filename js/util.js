import { ALERT_SHOW_TIME } from './data.js';

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

export { isEscapeKey, showAlert, showSuccessAlert, shuffleArray, copyArray, removeArrayElement, removeElementsFromContainer };
