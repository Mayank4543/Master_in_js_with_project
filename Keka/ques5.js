function evenfilternumbers(numbers) {
  return numbers.filter((num) => num % 2 == 0);
}
console.log(evenfilternumbers([24, 23, 22, 11, 10]));
// quest6
// factorial of a numbers
function factorial(num) {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(5));
// question 6
function isprime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(isprime(4));
console.log(Math.sqrt(4));

// function areAnagrams(str1, str2) {

//   return str1.split(“”).sort().join(“”) === str2.split(“”).sort().join(“”);

// }
