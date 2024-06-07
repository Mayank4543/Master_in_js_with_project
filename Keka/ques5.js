function evenfilternumbers(numbers) {
  return numbers.filter((num) => num % 2 == 0);
}
console.log(evenfilternumbers([24, 23, 22, 11, 10]));
