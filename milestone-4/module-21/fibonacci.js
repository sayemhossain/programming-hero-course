/*
nth=(n-1)th+(n-2)th
*/
const fibo = [0, 1];
for (let i = 2; i <= 12; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
// console.log(fibo);

function fabonacciSeries(num) {
  var fibo = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
console.log(fabonacciSeries(12));
