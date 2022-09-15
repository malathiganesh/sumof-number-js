// function digits_count(n) {
//     var count = 0;
//     if (n >= 1) ++count;
//     while (n / 10 >= 1) {
//       n /= 10;
//       ++count;
//     } 
//     return count;
//   }
//   console.log(digits_count(12112));
var value = 115,
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);