function mergeSortedArrays(arr1, arr2) {
  // Initialize pointers for arr1 and arr2
  let i = 0,
    j = 0;
  let mergedArray = [];

  // Traverse both arrays and merge them
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // If there are remaining elements in arr1, add them to mergedArray
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // If there are remaining elements in arr2, add them to mergedArray
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// Example usage:
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
let mergedArray = mergeSortedArrays(arr1, arr2);
console.log(mergedArray); // Output
