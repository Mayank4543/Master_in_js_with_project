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
// console.log(duplicatearr);

function arraysum(arr) {
  var b = 0;
  for (var i = 0; i < arr.length; i++) {
    b = b + arr[i];
  }
  return b;
}
const array = [1, 2, 3, 4, 5];
const value = arraysum(array);
// console.log(value);
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
// console.log(count);
for (var i = 1; i <= count; i++) {
  console.log(i);
  for (var j = 0; j < arr.length; j++) {
    if (arr[j].gender !== "male") {
      arr.splice(j, 1);
    }
  }
}

// console.log(arr);
