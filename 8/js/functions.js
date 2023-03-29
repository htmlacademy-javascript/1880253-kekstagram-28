// Функция проверки длины строки
const isValidLength = (initString, characters = 18) => initString.length >= characters;
isValidLength('проверяемая строк', 18);

// Функция проверки на палиндром
function isPalindrom(initString) {
  const tempString = initString.toLowerCase().replaceAll(' ', '');
  return tempString === tempString.split('').reverse().join('');
}

isPalindrom('Лёша на полке клопа нашёл ');

// Функция, извлекающая цифры из строки
function genNumber(initString) {
  const convertToString = String(initString);
  let result = '';
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i <= convertToString.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (convertToString[i] === numbers[j]) {
        result += convertToString[i];
      }
    }
  }
  if (result === '') {
    return NaN;
  }
  return Number(result);
}

genNumber(1.5);

// Функция с тремя параметрами
function modifyString(string, reqLength, symbols) {
  symbols = String(symbols);
  let result;
  if (string.length >= reqLength) {
    return string;
  }
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

  return result;
}
modifyString('qwerty', 4, '0');
