function retireve(arr, n) {
  var rsult = [];
  if (n <= arr.length) {
    for (var i = 0; i < n; i++) {
      rsult.push(arr[arr.length - 1 - i]);
    }
    return rsult;
  }
}
const arr = [1, 2, 456, 7, 54, 1];

const value = retireve(arr, 2);
console.log(value);
