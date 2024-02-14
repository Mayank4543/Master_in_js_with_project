function minandmx(arr) {
  var min = arr[0];
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { max: max, min: min };
}
function reversearr(arr) {
  var rec = [];
  for (i = arr.length - 1; i >= 0; i--) {
    rec.push(arr[i]);
  }
  return rec;
}
const arr = [2, 13, 4, 5];
const value = reversearr(arr);
// console.log(value);
function secondLargest(arr) {
  var max = arr[0];
  var secondMax = arr[1];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

const arr2 = [10, 14, 13, 15, 16];
const secondLargestValue = secondLargest(arr2);
// console.log(secondLargestValue);
function findmissingelement(arr) {
  let sumOforiginal = arr.reduce((sum, num) => {
    sum + num;
  }, 0);
  let n = arr.length + 1;
  let sumExpected = (n * (n + 1)) / 2;
  let missingElement = sumExpected - sumOforiginal;
  return missingElement;
}
const arr3 = [1, 2, 3, 4, 5, 7, 8, 9];
const missingElement2 = findmissingelement(arr3);
console.log(missingElement2);
function findMissingElement(arr) {
  // Calculate the sum of elements in the original array
  var sumOriginal = arr.reduce((sum, num) => sum + num, 0);

  // Calculate the sum of elements in the expected array (including the missing element)
  var n = arr.length + 1; // Since one element is missing
  var sumExpected = (n * (n + 1)) / 2;

  // Find the missing element
  var missingElement = sumExpected - sumOriginal;

  return missingElement;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5, 6, 8, 9, 11];
const missingElement = findMissingElement(inputArray);
// console.log("Missing Element:", missingElement);
const myarr = [1, 2, 3, 4, 5, 6, 8, 9, 11];
const missarray = [];
const missingelemnt = (arr) => {
  const min = Math.min(...arr);

  const max = Math.max(...arr);
  for (let i = min; i < max; i++) {
    if (arr.indexOf(i) < 0) {
      missarray.push(i);
    }
  }
  return missarray;
};
// console.log(missingelemnt(myarr));
function factorofarray(num) {
  const factor = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factor.push(i);
    }
  }
  return factor;
}
// console.log(factorofarray(12));
function arrayareEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
// const arr1 = [1, 2, 3];
// const arr3 = [1, 4, 3];
// const arr4 = [1, 2, 3];
// console.log(arrayareEqual(arr1, arr3));
// console.log(arrayareEqual(arr2, arr3));
// console.log(arrayareEqual(arr1, arr4));
function intersection(arr1, arr2) {
  const arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    // if (arr1[i] == arr2[i]) {
    //   arr3.push(arr1[i]);
    // }
    if (arr2.includes(arr1[i])) {
      arr3.push(arr1[i]);
    }
  }
  return arr3;
}
const arr8 = [1, 2, 3];
const arr7 = [1, 4, 3];
const arr4 = [1, 2, 3, 4];
console.log(intersection(arr8, arr7));
console.log(intersection(arr4, arr7));
console.log(intersection(arr8, arr4));
// const intersection2 = arr4.filter((elem) => {
//   return arr3.includes(elem);
// });
// console.log([...new Set(intersection2)]);
