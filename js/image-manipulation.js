import { form } from './validation.js';
import { SCALE_STEP, MIN_SCALE, MAX_SCALE } from './data.js';
import { imageToChange } from './form-handler.js';

const scaleControl = form.querySelector('.scale__control--value');
const scaleControlBtnPlus = form.querySelector('.scale__control--bigger');
const scaleControlBtnMinus = form.querySelector('.scale__control--smaller');


const scalePlus = () => {
  let currentValue = form.querySelector('.scale__control--value').getAttribute('value');
  currentValue = currentValue.slice(0, -1);
  let result = 0;
  if (currentValue < MAX_SCALE) {
    result = parseInt(currentValue, 10) + SCALE_STEP;
  } else {
    return currentValue;
  }
  imageToChange.style.transform = `scale(${result / 100})`;
  scaleControl.setAttribute('value', `${result}%`);
};

scaleControlBtnPlus.addEventListener('click', () => {
  scalePlus();
});

const scaleMinus = () => {
  let currentValue = form.querySelector('.scale__control--value').getAttribute('value');
  currentValue = currentValue.slice(0, -1);
  let result = 0;
  if (currentValue > MIN_SCALE) {
    result = parseInt(currentValue, 10) - SCALE_STEP;
  } else {
    return currentValue;
  }
  imageToChange.style.transform = `scale(${result / 100})`;
  scaleControl.setAttribute('value', `${result}%`);
};

scaleControlBtnMinus.addEventListener('click', () => {
  scaleMinus();
});
