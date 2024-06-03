function subsequnce(s, t) {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] == t[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }
  return t.length - j;
}
const str1 = "coaching";
const str2 = "coding";
console.log(subsequnce(str1, str2));
