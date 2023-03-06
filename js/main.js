const OBJECTS_TO_GENERATE = 25;

const DESCRIPTIONS = [
  'Это мы',
  'Птицы',
  'Тупа адыхаем',
  'С братом',
  'С сестрой',
  'Душевное описание фотографии',
  'Шутливое описание фотографии',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Максим',
  'Лидия',
  'Роберт',
  'Виталик',
  'Кекс',
];

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

const generateCommentId = createRandomIdFromRangeGenerator(1, 25);

// Функция создания объекта комментария
const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: COMMENTS.at(getRandomInteger(0, COMMENTS.length - 1)),
  name: NAMES.at(getRandomInteger(0, NAMES.length - 1)),
});

// Функция создания массива объектов комментариев
const createCommentsArray = () => Array.from({ length: getRandomInteger(1, 2) }, createComment);

// Функция создания объекта фотографии
const createPhoto = () => ({
  id: generateId(),
  url: `photos/${generatePhotoId()}.jpg`,
  description: DESCRIPTIONS.at(getRandomInteger(0, DESCRIPTIONS.length - 1)),
  likes: getRandomInteger(15, 250),
  comments: createCommentsArray(),
});

const createPhotoArray = () => Array.from({ length: OBJECTS_TO_GENERATE }, createPhoto);
createPhotoArray();
