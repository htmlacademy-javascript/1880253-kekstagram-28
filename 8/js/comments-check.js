import { COMMENTS_TO_SHOW } from './render-pictures.js';
import { bigPicture } from './open-popup.js';

const loadMoreButton = document.querySelector('.comments-loader');

const showCommentsCount = () => {
  const currentCommentsCount = document.querySelectorAll('.social__comment').length - document.querySelectorAll('.social__comment.visually-hidden').length;
  document.querySelector('.social__comment-count').innerHTML = `${currentCommentsCount} из <span class="comments-count">${document.querySelectorAll('.social__comment').length}</span> комментариев`;
};

const hideComments = () => {
  const allComments = document.querySelectorAll('.social__comment');

  if (allComments.length <= COMMENTS_TO_SHOW) {
    loadMoreButton.classList.add('hidden');
  }
  if (allComments.length > COMMENTS_TO_SHOW) {
    for (let j = COMMENTS_TO_SHOW; j < allComments.length; j++) {
      allComments[j].classList.add('visually-hidden');
    }
  }
  showCommentsCount();
};

loadMoreButton.addEventListener('click', () => {
  const nonVisibleComments = bigPicture.querySelectorAll('.social__comment.visually-hidden');
  let count = 5;

  if (nonVisibleComments.length <= count) {
    count = nonVisibleComments.length;
    for (const comments of nonVisibleComments) {
      comments.classList.remove('visually-hidden');
      loadMoreButton.classList.add('hidden');
    }
  } else {
    for (let i = 0; i < count; i++) {
      nonVisibleComments[i].classList.remove('visually-hidden');

    }
  }
  showCommentsCount();
});

export { hideComments, loadMoreButton };
