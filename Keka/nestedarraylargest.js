function findlargetsnested(nested) {
  let largest = nested[0][0];
  for (let arr of nested) {
    for (let num of arr) {
      if (num > largest) {
        largest = num;
      }
    }
  }
  return largest;
}
let nestedArray = [
  [3, 5, 7],
  [1, 6, 9],
  [8, 4, 2],
];

console.log(findlargetsnested(nestedArray));
let result = fibonacciSequence(7);
console.log(result);
function isPalindrome(str) { 

  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, ”).toLowerCase(); 

  const reversedStr = cleanStr.split(”).reverse().join(”); 

  return cleanStr === reversedStr; 

} 