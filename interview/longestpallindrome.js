function longestpalindrome(s) {
  var uppercase = new Array(26).fill(0);
  var lowercase = new Array(26).fill(0);
  var ans = 0;
  for (var i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if (c >= "a" && c <= "z") {
      lowercase[c.charCodeAt(0) - 97]++;
    } else if (c >= "A" && c <= "Z") {
      uppercase[c.charCodeAt(0) - 65]++;
    }
  }

  var firstodd = false;
  for (var i = 0; i < 26; i++) {
    if (lowercase[i] % 2 == 0) {
      ans += lowercase[i];
    } else {
      if (firstodd == false) {
        ans += lowercase[i];
        firstodd = true;
      } else {
        ans += lowercase[i] - 1;
      }
    }
  }
  for (var i = 0; i < 26; i++) {
    if (uppercase[i] % 2 == 0) {
      ans += uppercase[i];
    } else {
      if (firstodd == false) {
        ans += uppercase[i];
        firstodd = true;
      } else {
        ans += uppercase[i] - 1;
      }
    }
  }
  return ans;
}
var str1 = "accbddaa";
var str2 = "AAAAA";
longestpalindrome(str1);
longestpalindrome(str2);
console.log(longestpalindrome(str2));
