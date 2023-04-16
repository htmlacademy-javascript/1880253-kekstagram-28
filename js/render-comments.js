import { bigPicture } from './open-popup.js';

const commentsContainer = document.querySelector('.social__comments');

// Новая генерация
const removeNodeChilds = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

const createAvatarInComment = (element) => {
  const pictureImage = document.createElement('img');
  pictureImage.classList.add('social__picture');
  pictureImage.setAttribute('src', element.avatar);
  pictureImage.setAttribute('alt', element.name);
  pictureImage.setAttribute('width', 35);
  pictureImage.setAttribute('height', 35);
  return pictureImage;
};

const createMessageInComment = (element) => {
  const messageText = document.createElement('p');
  messageText.classList.add('social__text');
  messageText.textContent = element.message;
  return messageText;
};

const createCommentItem = (element) => {
  const eachCommentFragment = document.createDocumentFragment();
  const commentItem = document.createElement('li');
  commentItem.classList.add('social__comment');
  commentItem.append(createAvatarInComment(element));
  commentItem.append(createMessageInComment(element));
  eachCommentFragment.append(commentItem);
  return eachCommentFragment;
};

const createCommentsInPopup = (array) => {
  removeNodeChilds(commentsContainer);

  for (const element of array) {
    commentsContainer.append(createCommentItem(element));
  }
};

const renderBigPictureInfo = (object) => {
  bigPicture.querySelector('.big-picture__img>img').src = object.url;
  bigPicture.querySelector('.social__caption').textContent = object.description;
  bigPicture.querySelector('.likes-count').textContent = object.likes;
  bigPicture.querySelector('.comments-count').textContent = object.comments.length;
  createCommentsInPopup(object.comments);
};

export { renderBigPictureInfo };
