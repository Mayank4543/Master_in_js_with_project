const myarray = [1, 2, 3, 5];
myarray.length = 0;
const newarray = [];
// console.log(myarray);
// console.log(newarray);
// let a = 12.0;
// if (a % 1 === 0) {
//   console.log("Number is integer");
// } else {
//   console.log("number is not interge");
// }
// Make duplicate arr

function duplicate(arr) {
  const newarray = [...arr, ...arr];
  return newarray;
}
// console.log(duplicate([1, 2, 34, 5]));
const originalarr = [1, 2, 3, 45];
const duplicatearr = [];
for (let i = 0; i < originalarr.length; i++) {
  duplicatearr[i] = originalarr[i];
}
for (let i = 0; i < originalarr.length; i++) {
  duplicatearr[duplicatearr.length] = originalarr[i];
}
console.log(duplicatearr);

function arraysum(arr) {
  var b = 0;
  for (var i = 0; i < arr.length; i++) {
    b = b + arr[i];
  }
  return b;
}
const array = [1, 2, 3, 4, 5];
const value = arraysum(array);
console.log(value);
const arr = [
  {
    name: "Mayank",
    gender: "male",
  },
  {
    name: "Harsh",
    gender: "male",
  },

  {
    name: "gudiya",
    gender: "female",
  },
  {
    name: "sonali",
    gender: "nonspecied",
  },
];
var count = 0;
arr.forEach((element) => {
  if (element.gender !== "male") count++;
});
console.log(count);
for (var i = 1; i <= count; i++) {
  // console.log(i);
  for (var j = 0; j < arr.length; j++) {
    if (arr[j].gender !== "male") {
      arr.splice(j, 1);
    }
  }
}

// console.log(arr);
// find the largest and smallest of the array
function smallestandlargest(take) {
  let arrmin = take[0];
  let arrmax = take[0];
  for (let i = 1; i < take.length; i++) {
    if (take[i] < arrmin) {
      arrmin = take[i];
    } else if (take[i] > arrmax) {
      arrmax = take[i];
    }
  }
  return { smalest: arrmin, larget: arrmax };
}
const ap = [12, 3, 4, 15, 6, 18];
const ele = smallestandlargest(ap);
// console.log(ele);
// const myArray = [1, 2, 3, 4, 5];

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }
// Merge two sorted arrays and rempove dupicate of the array s
function smallestandlargestandmergesorted(take, one) {
  for (let i = 0; i < take.length; i++) {
    for (let j = 0; j < take.length - i - 1; j++) {
      if (take[j] > take[j + 1]) {
        var temp = take[j];
        take[j] = take[j + 1];
        take[j + 1] = temp;
      }
    }
  }
  for (let k = 0; k < one.length; k++) {
    for (let l = 0; l < one.length - k - 1; l++) {
      if (one[l] > one[l + 1]) {
        var temp = one[l];
        one[l] = one[l + 1];
        one[l + 1] = temp;
      }
    }
  }
  const mergedArr = [];
  let i = 0,
    j = 0;

  while (i < take.length && j < one.length) {
    if (take[i] < one[j]) {
      mergedArr.push(take[i]);
      i++;
    } else if (take[i] > one[j]) {
      mergedArr.push(one[j]);
      j++;
    } else {
      mergedArr.push(take[i]);
      i++;
      j++;
    }
  }

  while (i < take.length) {
    mergedArr.push(take[i]);
    i++;
  }

  while (j < one.length) {
    mergedArr.push(one[j]);
    j++;
  }

  return mergedArr;
}
const arra1 = [2, 3, 1, 7, 6, 19, 8, 11, 13];
const arra2 = [2, 1, 3, 7, 4, 5, 9, 6];
const ele2 = smallestandlargestandmergesorted(arra1, arra2);
console.log(ele2);
function union(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))];
}

console.log(union([1, 2, 3, 4], [2, 4, 6, 6666]));

function findDuplicates(arr) {
  let occurance = {};
  let duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    let currentelemt = arr[i];
    if (occurance[currentelemt] === undefined) {
      occurance[currentelemt] = 1;
    } else {
      duplicate.push(currentelemt);
      occurance[currentelemt]++;
    }
  }
  return duplicate;
}
const arr1 = [2, 1, 3, 7, 4, 5, 9, 6, 2, 3, 1, 7, 6, 19, 8];
const duplicateValues = findDuplicates(arr1);
console.log("Duplicate values in the array:", duplicateValues);
const uniqueDuplicateValues = [...new Set(duplicateValues)];
console.log("Unique duplicate values in the array:", uniqueDuplicateValues);

function createPyramid(rows) {
  let pyramid = "";
  for (let i = 1; i <= rows; i++) {
    // Add spaces before the asterisks
    for (let j = 1; j <= rows - i; j++) {
      pyramid += " ";
    }
    // Add asterisks for each row
    for (let k = 1; k <= 2 * i - 1; k++) {
      pyramid += "*";
    }
    // Move to the next line after completing a row
    pyramid += "\n";
  }
  return pyramid;
}

console.log(createPyramid(5));
function duplicates(arr) {
  const occurance = {};
  const dupllicate = [];
  for (let i = 0; i < arr.length; i++) {
    let cuurentelement = arr[i];
    if (occurance[cuurentelement] === undefined) {
      occurance[cuurentelement] = 1;
    } else {
    }
  }
}

let arr2 = [2, 1, 3, 7, 4, 5, 9, 6, 2, 3, 1, 7, 6, 19, 8, 7];
let duplicate2 = [];
for (let i = 0; i < arr2.length; i++) {
  for (let j = i + 1; j < arr2.length; j++) {
    if (arr2[i] === arr2[j]) {
      let duplicate = false;
      for (let k = 0; k < arr2.length; k++) {
        if (duplicate[k] === arr2[i]) {
          duplicate = true;
          break;
        }
      }
      if (!duplicate) {
        duplicate2.push(arr2[i]);
      }
      break;
    }
  }
}
console.log("duplca:", duplicate2);
function createpyrmid(row) {
  let pyrmid = "";
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= row - i; j++) {
      pyrmid += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      pyrmid += "*";
    }
    pyrmid += "\n";
  }
}
createpyrmid(5);
