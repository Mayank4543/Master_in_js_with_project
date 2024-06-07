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
