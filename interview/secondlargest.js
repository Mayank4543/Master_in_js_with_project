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
