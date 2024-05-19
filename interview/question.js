// const arr = ["baby", "shy", "is", "cute"];
// console.log(arr[0].length);
// if (arr[0].length == 4) {
//   console.log("babyiscute");
// } else {
//   console.log("baby is not cute");
// }

function sumofelemnt(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
// sumofelemnt(6);
let arr11 = [12, 1, 5, 44, 34];
function findMaxNumber(arr) {
  return Math.max(...arr);
}
console.log(findMaxNumber(arr11));
