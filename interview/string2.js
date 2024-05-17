function strreverse(str) {
  let r = "";
  for (let i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }
  return r;
}
const str = "Mayank Rathore";
// console.log(strreverse(str));
function findVowels(str) {
  const lowercase = str.toLowerCase();
  const vowel = ["a", "e", "i", "o", "u"];
  const findvowels = [];
  for (let i = 0; i < lowercase.length; i++) {
    if (vowel.includes(str[i])) {
      findvowels.push(str[i]);
    }
  }
  return findvowels;
}
const str2 = "MayankRathore";
const value = findVowels(str2);
console.log(value);
function firstletterCapital(str) {
  const newarr = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return newarr.join(" ");
}
const string = "mayank rathore";
const value1 = firstletterCapital(string);
console.log(value1);
