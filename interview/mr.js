const str = "ANnurag Sharma";
let str2 = " ";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] >= "A" && str[i] <= "Z") {
//     str2 += str[i];
//   }
// }

// const strr = str.split(" ").map((item) => item.charAt(0));

console.log(str2);
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
