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
