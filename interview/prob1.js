const str = "saare jahan se accha hindustan";
// const savedstd = str.split(" ").map(function (word) {
//   return word.split("").reverse().join("");
// });
// console.log(savedstd.join(" "));
let r = "";

for (let i = str.length - 1; i >= 0; i--) {
  r = r + str[i];
}
// console.log(r);
// check weather a string is palindrom or not

// let a = "dhfdhvidf";
// let reversestr = a.split("").reverse().join("");
// if (reversestr === a) {
//   console.log("Number is palindrom");
// } else {
//   console.log("Number is not palindrom");
// }
function ispallindrome(str) {
  let lowercasstr = str.toLowerCase();
  let start = 0;
  let end = lowercasstr.length - 1;
  while (start < end) {
    if (lowercasstr[start] !== lowercasstr[end]) {
      console.log("This is not a pallindrome");
    } else {
      console.log("This is  a pallindrome");
    }
    start++;
    end--;
  }
}
// console.log(ispallindrome("lol"));
function issorted(str) {
  var lowercasestr = str.toLowerCase();
  var charter = [];
  for (var i = 0; i < lowercasestr.length; i++) {
    charter[i] = lowercasestr[i];
  }
  for (var i = 0; i < charter.length; i++) {
    for (var j = 0; j < charter.length - 1; j++) {
      if (charter[j] > charter[j + 1]) {
        var temp = charter[j];
        charter[j] = charter[j + 1];
        charter[j + 1] = temp;
      }
    }
  }
  var stringsorted = "";
  for (var i = 0; i < charter.length; i++) {
    stringsorted += charter[i];
  }
  return stringsorted;
}

// console.log(issorted("Hello"));
function isfirstelementcappital(str) {
  const isalloowed = str.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  return isalloowed.join(" ");
}
// console.log(isfirstelementcappital("hello kaise ho"));
function occu(str) {
  var lowercase = str.toLowerCase();
  var charcount = {};
  var maxChar = "";
  var maxcount = 0;
  for (var i = 0; i < lowercase.length; i++) {
    var char = lowercase[i];
    if ((char > "a" && char < "z") || (char > "A" && char < "Z")) {
      if (charcount[char]) {
        charcount[char]++;
      } else {
        charcount[char] = 1;
      }
      if (charcount[char] > maxcount) {
        maxChar = char;
        maxcount = charcount[char];
      }
    }
  }
  return { char: maxChar, maxcount: maxcount };
}
console.log(occu("hello"));
function noofoccurelements(str) {
  var occurance = {};
  str.split("").forEach(function (elem) {
    if (occurance.hasOwnProperty(elem) === false) {
      occurance[elem] = 1;
    } else {
      occurance[elem]++;
    }
  });
  return occurance;
}
// console.log(noofoccurelements("hello"));
