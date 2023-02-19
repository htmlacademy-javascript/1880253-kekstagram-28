// Функция проверки длины строки
const checkLength = (string, characters = 18) => string.length >= characters;
checkLength('проверяемая строк', 18);

// Функция проверки на палиндром
function checkPalindrom(string) {
  string = string.toLowerCase().replaceAll(' ', '');
  const result = string === string.split('').reverse().join('');
  return result;
}

checkPalindrom('Лёша на полке клопа нашёл ');

// Функция, извлекающая цифры из строки
function getNumber(string) {
  if (typeof string === 'number') {
    string = String(string);
    string = string.replaceAll('-', '').replaceAll('.', '');
    return Number(string);
  }
  return parseInt(string.replace(/[^\d]/g, ''), 10);
}

getNumber('2000 string 2033');

// Функция с тремя параметрами
function modifyString(string, reqLength, symbols) {
  symbols = String(symbols);
  let result;
  if (string.length >= reqLength) {
    return string;
  } else {
    result = string;
    if (symbols.length >= reqLength) {
      result = symbols.slice(0, ((symbols.length + 1 - reqLength) * -1)) + string;
      return result;
    }
    result = symbols + string;
    if (result.length < reqLength && result.length + 1 === reqLength) {
      result = symbols.slice(0, 1) + result;
      return result;
    }
    result = string;
    for (let i = string.length; i < reqLength; i++) {
      if (string.length < reqLength) {
        result = symbols + result;
      } else if (result.length < reqLength && result.length + 1 === reqLength) {
        result = symbols.slice(0, 1) + result;
      }
    }
  }
  return result;
}
modifyString('qwerty', 4, '0');
