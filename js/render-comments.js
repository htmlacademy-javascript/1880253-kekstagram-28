import { bigPicture } from './open-popup.js';

const commentsContainer = document.querySelector('.social__comments');

const createCommentInPopup = (element) => {
  const newComment = `
  <li class="social__comment">
    <img class="social__picture" src="${element.avatar}" alt="${element.name}" width="35" height="35">
    <p class="social__text">${element.message}</p>
  </li>
  `;
  return newComment;
};

const createCommentsInPopup = (array) => {
  let commentString = '';
  for (const element of array) {
    commentString += createCommentInPopup(element);
  }
  commentsContainer.innerHTML = commentString;
};

const renderBigPictureInfo = (object) => {
  bigPicture.querySelector('.big-picture__img>img').src = object.url;
  bigPicture.querySelector('.social__caption').textContent = object.description;
  bigPicture.querySelector('.likes-count').textContent = object.likes;
  bigPicture.querySelector('.comments-count').textContent = object.comments.length;
  createCommentsInPopup(object.comments);
};

export { renderBigPictureInfo };
