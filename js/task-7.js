// Написать скрипт, который запрашивает 2 числа, начало и конец диапазона,
// и в результате выдаёт сумму всех нечетных чисел в этом диапазоне.
function isOdd(min, max) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(isOdd(2, 15));
