// Написать код определяющим, является ли введенный пользователем текст палиндромом (одинаково читается и справа и слева).
// Пример палиндрома: 1234321.
function isPallindrom(str) {
  str = str.toString();
  return str === str.split('').reverse().join('');
}
console.log(isPallindrom(1234321));
