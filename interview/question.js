// const arr = ["baby", "shy", "is", "cute"];
// console.log(arr[0].length);
// if (arr[0].length == 4) {
//   console.log("babyiscute");
// } else {
//   console.log("baby is not cute");
// }

function sumofelemnt(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
// sumofelemnt(6);
let arr11 = [12, 1, 5, 44, 34];
function findMaxNumber(arr) {
  return Math.max(...arr);
}
console.log(findMaxNumber(arr11));
var str3 = "Hello Mayank";
// const reverseString = (str3) => str3.split(”).reverse().join(”);
const reverseString = (str3) => str3.split("").reverse().join("");
console.log(reverseString(str3));
function findLargestElement(nestedArray) {
  let largest = nestedArray[0][0];

  for (let arr of nestedArray) {
    for (let num of arr) {
      if (num > largest) {
        largest = num;
      }
    }
  }

  return largest;
}

function fibonacciSequence(numTerms) {
  // if numTerms is less than or equal to 0, return an empty array
  if (numTerms <= 0) return [];

  // if numTerms is 1, return an array with a single element 0
  if (numTerms === 1) return [0];

  // initialize the sequence array with the first two Fibonacci numbers
  let sequence = [0, 1];
  console.log(sequence.length);
  // loop until the sequence has the desired number of terms
  while (sequence.length < numTerms) {
    // calculate the next Fibonacci number by adding the last two numbers in the sequence
    let nextNumber =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];

    // add the next number to the sequence
    sequence.push(nextNumber);
  }

  // return the completed Fibonacci sequence
  return sequence;
}
console.log(fibonacciSequence(10));
function factorial(num) {
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}
console.log(factorial(5));
// now i want to cont the occurance of each correct string
function countCharacterOccurrences(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}
console.log(countCharacterOccurrences("Myank"));
// function toTitleCase(str) {

//   return str.replace(/\b\w/g, l => l.toUpperCase());

// }
let str6 = "mayankrathore";
let capitalizedStr = str6.charAt(0).toUpperCase() + str6.slice(1);
console.log(capitalizedStr);
//  to check wheather string is pallindrome or
// function isPalindrome(str) {

//   const cleanStr = str.replace(/[^a-zA-Z0-9]/g, ”).toLowerCase();

//   const reversedStr = cleanStr.split(”).reverse().join(”);

//   return cleanStr === reversedStr;

// }
