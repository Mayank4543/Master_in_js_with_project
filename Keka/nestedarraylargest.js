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
// function fibonacciSequence(numTerms) {

//   if (numTerms <= 0) return [];

//   if (numTerms === 1) return [0];

//   let sequence = [0, 1];

//   while (sequence.length < numTerms) {

//     let nextNumber = sequence[sequence.length – 1] + sequence[sequence.length – 2];

//     sequence.push(nextNumber);

//   }

//   return sequence;

// }
