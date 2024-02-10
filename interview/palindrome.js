// const syr = "LOL";
// const ispalindrome = syr.split("").reverse().join("");
// if (ispalindrome === syr) {
//   console.log("This is a palindrome");
// } else {
//   console.log("This is not a palindrome");
// }
// const str = "Mayank Rathore";
// const isreverse = str.split(" ").map((word) => {
//   return word.split("").reverse().join("");
// });
// console.log(isreverse.join(" "));
function isreverse(str) {
  let b = 0;
  while (str > 0) {
    let rem = str % 10;
    b = b * 10 + rem;
    str = Math.floor(str / 10);
  }
  return b;
}
let a = 123;
console.log(a);
const value = isreverse(a);
console.log(value);
