class Solution {
  fillCount(word, count) {
    for (let ch of word) {
      count[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
  }

  commonChars(words) {
    let result = [];
    let n = words.length;
    let count = new Array(26).fill(0);

    // Fill count array for the first word
    this.fillCount(words[0], count);

    // Update count array based on the minimum frequency in each word
    for (let i = 1; i < n; i++) {
      let temp = new Array(26).fill(0);
      this.fillCount(words[i], temp);
      for (let j = 0; j < 26; j++) {
        count[j] = Math.min(count[j], temp[j]);
      }
    }

    // Create result array based on the final count array
    for (let i = 0; i < 26; i++) {
      let c = count[i];
      while (c--) {
        result.push(String.fromCharCode(i + "a".charCodeAt(0)));
      }
    }

    return result;
  }
}

// Usage example::
let solution = new Solution();
let words = ["bella", "label", "roller"];
console.log(solution.commonChars(words)); // Output: ["e", "l", "l"]
