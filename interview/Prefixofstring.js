var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  // Find the length of the shortest string in the array
  let minLength = Math.min(...strs.map((str) => str.length));

  // Compare characters up to the length of the shortest string
  let prefix = "";
  for (let i = 0; i < minLength; ++i) {
    let currentChar = strs[0][i];
    for (let j = 1; j < strs.length; ++j) {
      if (strs[j][i] !== currentChar) {
        return prefix;
      }
    }
    prefix += currentChar;
  }

  return prefix;
};

// Example usage:
let strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1)); // Output: "fl"

let strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2));
