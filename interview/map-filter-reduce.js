const nums = [1, 2, 3, 4];
const arr = nums.map((num, i, arr) => {
  return num * 3 + i;
});
console.log(arr);
const arr2 = nums.filter((num) => {
  return num > 2;
});
console.log(arr2);
function reversenumber(num) {
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}
let a = 123;
console.log(reversenumber(a));
