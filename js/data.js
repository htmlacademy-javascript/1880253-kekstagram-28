import { generateId, generatePhotoId, createRandomIdFromRangeGenerator, getRandomInteger } from './util.js';

const OBJECTS_TO_GENERATE = 25;
const MIN_LIKES_AMOUNT = 15;
const MAX_LIKES_AMOUNT = 200;
const MIN_COMMENTS_AMOUNT = 2;
const MAX_COMMENTS_AMOUNT = 12;
const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;
const MIN_COMMENT_ID = 1;
const MAX_COMMENT_ID = 6;
const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAGS_AMOUNT = 5;

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

const generateCommentId = createRandomIdFromRangeGenerator(MIN_COMMENT_ID, MAX_COMMENT_ID);

// Функция создания объекта комментария
const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER)}.svg`,
  message: COMMENTS.at(getRandomInteger(0, COMMENTS.length - 1)),
  name: NAMES.at(getRandomInteger(0, NAMES.length - 1)),
});

// Функция создания массива объектов комментариев
const createCommentsArray = () => Array.from({ length: getRandomInteger(MIN_COMMENTS_AMOUNT, MAX_COMMENTS_AMOUNT) }, createComment);

// Функция создания объекта фотографии
const createPhoto = () => ({
  id: generateId(),
  url: `photos/${generatePhotoId()}.jpg`,
  description: DESCRIPTIONS.at(getRandomInteger(0, DESCRIPTIONS.length - 1)),
  likes: getRandomInteger(MIN_LIKES_AMOUNT, MAX_LIKES_AMOUNT),
  comments: createCommentsArray(),
});

const createPhotoArray = () => Array.from({ length: OBJECTS_TO_GENERATE }, createPhoto);

export { createPhotoArray, MAX_COMMENT_LENGTH, MAX_HASHTAGS_AMOUNT };
