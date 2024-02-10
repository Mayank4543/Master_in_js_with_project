// function isShuffle(arr) {
//   var shuffle = Array.from({ length: arr.length });
//   shuffle.map(function (v, i) {
//     if (i > 0) {
//       i--;
//       var indexof = Math.floor(Math.random() * i + 1);
//       var temp;
//       temp = arr[i];
//       arr[i] = arr[indexof];
//       arr[indexof] = temp;
//     }
//     return v;
//   });
//   return arr;
// }
// function isShuffle(arr) {
//   var shuffle = arr.length;
//   while (shuffle > 0) {
//     shuffle--;
//     var indexof = Math.floor(Math.random() * shuffle);
//     var temp = arr[shuffle];
//     arr[shuffle] = arr[indexof];
//     arr[indexof] = temp;
//   }
//   return arr
// }

// last Element of the array\
function retrieve(arr, n) {
  if (n <= arr.length) {
    for (var i = 0; i < n; i++) {
      console.log(arr[arr.length - 1 - i]);
    }
  }
}
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const value = retrieve(arr, 2);
// console.log(value);
// find the count of Element in the array
function freq(arr) {
  const fr = {};
  arr.forEach(function (elem) {
    if (fr.hasOwnProperty(elem)) fr[elem]++;
    else fr[elem] = 1;
  });
  var ans = Object.keys(fr).reduce(function (acc, num) {
    return fr[acc] > fr[num] ? acc : num;
  });
  console.log(ans);
}
const arr = [1, 2, 3, 4, 5, 3, 5, 3, 5, 6, 43, 45, 3, 5, 35, 3, 5, 3];
const value = freq(arr);
