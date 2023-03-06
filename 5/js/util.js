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


export { generateId, generatePhotoId, createRandomIdFromRangeGenerator, getRandomInteger };
