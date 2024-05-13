let arr = [3, 9, 18, 3, 11, 9];
const duplicate = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      let duplicateexitst = false;
      for (let k = 0; k < arr.length; k++) {
        if (duplicateexitst[k] == arr[i]) {
          duplicateexitst = true;
          break;
        }
      }
      if (!duplicateexitst) {
        duplicate.push(arr[i]);
        break;
      }
    }
  }
}
console.log(duplicate);
