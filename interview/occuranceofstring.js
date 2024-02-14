// function occurance(str) {
//   var lowercast = str.toLowerCase();
//   var charter = {};
//   var maxchar = "";
//   var maxcount = 0;
//   for (let i = 0; i < lowercast.length; i++) {
//     var char = lowercast[i];
//     if ((char > "a" && char < "z") || (char > "A" && char < "Z")) {
//       if (charter[char]) {
//         charter[char]++;
//       } else {
//         charter[char] = 1;
//       }
//       if (charter[char] > maxcount) {
//         maxchar = char;
//         maxcount = charter[char];
//       }
//     }
//   }
//   return charter;
// }
// console.log(occurance("Mayank"));
function countOccurrences(str, char) {
  // Use split to create an array of characters, then filter and get the length
  return str.split(char).length - 1;
}

const myString = "Mayank";
const characterToCount = "a";

const occurrences = countOccurrences(myString, characterToCount);
console.log(
  `Number of occurrences of "${characterToCount}" in "${myString}": ${occurrences}`
);
