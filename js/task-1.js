// Две одинаковые буквы
// Дана строка. Известно, что она содержит ровно две одинаковые буквы. Найдите эти
// буквы.
// Формат входных данных
// На вход подается 1 строка.
// Формат выходных данных
// Необходимо вывести букву, которая встречается в строке дважды.

// Пример: введено: avdaf выводим: a
function twoLetters(str) {
  let result;
  const obj = [...str].reduce(function (acc, letter) {
    return {
      ...acc,
      [letter]: acc.hasOwnProperty(letter) ? acc[letter] + 1 : 1,
    };
  }, {});
  for (let key in obj) {
    if (obj[key] === 2) {
      result = key;
    }
  }
  return result;
}

console.log(twoLetters('jhcic'));
console.log(twoLetters('avdaf'));
