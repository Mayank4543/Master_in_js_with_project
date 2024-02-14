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
function isShuffle(arr) {
  var shuffle = arr.length;
  while (shuffle > 0) {
    shuffle--;
    var indexof = Math.floor(Math.random() * shuffle);
    var temp = arr[shuffle];
    arr[shuffle] = arr[indexof];
    arr[indexof] = temp;
  }
  return arr;
}
console.log(isShuffle([1, 2, 3, 4, 5, 6, 7]));

// last Element of the array\
function retrieve(arr, n) {
  if (n <= arr.length) {
    var result = [];
    for (var i = 0; i < n; i++) {
      result.pop(arr[arr.length - i - 1]);
    }
    return result;
  }
}
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const value2 = retrieve(arr2, 2);
// console.log(value2);
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
  return ans;
}
const arr = [1, 2, 3, 4, 5, 3, 5, 3, 5, 6, 43, 45, 3, 5, 35, 3, 5, 3];
const value = freq(arr);
// console.log(value);
// function shuffle(shuffle) {
//   const arr = shuffle.length;
//   while (arr > 0) {
//     var indexof = Math.floor(Math.random() * arr);
//     var temp = shuffle[arr];
//     shuffle[arr] = shuffle[indexof];
//     shuffle[indexof] = temp;
//   }
//   return shuffle;
// }
// console.log(shuffle([1, 2, 3, 4, 6]));
