class Solution {
  romanToInt(s) {
    const roman = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let total = 0;
    const n = s.length;
    // console.log(n);

    for (let i = 0; i < n; i++) {
      // If the current numeral is less than the next numeral, subtract its value
      console.log(roman[s[i]]);
      if (i < n - 1 && roman[s[i]] < roman[s[i + 1]]) {
        total -= roman[s[i]];
      } else {
        // Otherwise, add its value
        total += roman[s[i]];
      }
    }

    return total;
  }
}

// Example usage:
const solution = new Solution();
// console.log(solution.romanToInt("III")); // Output: 3
console.log(solution.romanToInt("LVIII")); // Output:58
