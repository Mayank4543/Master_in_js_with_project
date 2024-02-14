function mergeandsorted(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length - i - 1; j++) {
      if (arr1[j] > arr1[j + 1]) {
        var temp = arr1[j];
        arr1[j] = arr1[j + 1];
        arr1[j + 1] = temp;
      }
    }
  }
  for (let k = 0; k < arr2.length; k++) {
    for (let l = 0; l < arr2.length - k - 1; l++) {
      if (arr2[l] > arr2[l + 1]) {
        var temp = arr2[l];
        arr2[l] = arr2[l + 1];
        arr2[l + 1] = temp;
      }
    }
  }
  const mergearr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergearr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      mergearr.push(arr2[j]);

      j++;
    } else {
      mergearr.push(arr1[i]);
      i++;
      j++;
    }
  }
  while (i < arr1.length) {
    mergearr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergearr.push(arr2[j]);

    j++;
  }
  return mergearr;
}
console.log(
  mergeandsorted([2, 1, 3, 7, 4, 5, 9, 6], [2, 3, 1, 7, 6, 19, 8, 11, 13])
);
