const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить изображения. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте снова',
};

export { BASE_URL, Route, Method, ErrorText };
