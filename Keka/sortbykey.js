let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 25 },
];

function sortByKey(arr, key) {
  return arr.sort((a, b) => a[key] - b[key]);
}

let sortedByAge = sortByKey(people, "age");
console.log(sortedByAge);
