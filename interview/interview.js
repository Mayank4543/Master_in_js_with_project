// // let z = [1, 2, 3, 4, 5];
// // let name = { age: "23" };
// // console.log(...z);

// // 3
// console.log(typeof NaN);
// // 6
// let d = 20 - -30;
// console.log(d);

// // 8
// let data = { name: "test", age: 23 };
// console.log(delete data.age, data.name);
// console.log(data);

// // 7
// const setr = new Set([1, 2, 4, 5, 6, 1]);
// console.log(setr);
// // // 11 with  out dot operator calling key and value
// const dara = {
//   name: "dara",
//   age: "12",
//   course: "BCA",
// };
// const { age } = dara;
// console.warn(age);
// // 14
let data1 = { name: "dara", age: "18", course: "BCA" };
let info = { city: "dara", age: "12", course: "Bcom" };
data1 = { ...info, ...data1 };
console.log(data1);
// // 16
// const result1 = false || {} || null;
// console.log(result1);
// // 17
// const result = false || null || "";
// console.log(result);
// 21;
// // json.parse();
// // what this method will do
// // ans parses jason to a javascript value
// //  let scope only on block level  inside the function
// 26;
// const name1 = "code generation";
// console.log(!typeof name1 === "string");
// console.log(!typeof name1 === "object");
// // output false  false
// let person = { name: "anil" };
// person.age = 12;
// Object.seal(person);
// person.name = "mayank";
// // //  we cannot modify the object but we can modify only key  and value which arre present in the object not add to the new  key value pair

// console.log(person);
// 31
// let a = 39;
// console.log(a % 2);

// let data = "true";
// // convert the data to boolean false  to value
// console.log(!data);
// map and foreach difference
//  map humesha kuch na kuch return karta hain
//   lekin foreach nhi karta hain return
// 35
let data3 = ["anil", "radha", "peter"];
delete data3["anil"];
console.log(data3);
// output[("anil", "radha", "peter")];
// let data = ["anil", "radha", "peter"];
// delete data[1];
// console.log(data);
// [ 'anil', <1 empty item>, 'peter' ]

// null and undefined ko delte nhi kar skte  hain kyuki boo kuch na space occupy karte  hain
// 36
// let data = ["anil", "radha", "peter"];
// delete data[1];
// console.log(data.length);
// output  3
let a = [1, 2, 34, 5];
let b = [1, 2, 3];
let c = [...a, ...b];
console.log(c);
// array mein multiple value ho skti hain but object mein kevel ek hi key ho skti hain

// let a1 = 2;
// setTimeout(() => {
//   console.log(a);
// }, 1000);

// a1 = 100;
// isss  question mein 2 phele print hoga ki 100  100 hoga kyuki set timeout ya set interval ho yeh stack mein sabse last mein call hote  sara code phele execute karega uske baad yeh execute hoga;
// let a = "like";
// let b = `like`;
// console.log(a === b);
// output
// true
// 43
// let a = 1;
// let b = 2;
// console.log(--b === a);
// output -> kyuki b ki value decrement ho gayi
// true
// 44
let a11 = 1;
let b11 = 2;
let c11 = 1;
console.log((a11 === --b11) === c11);
// console.log(3**3);
// three star not possible
console.log([[[[[[[[[[]]]]]]]]]]);

// 54
// console.log(+true);
// console.log(typeof +true);
// + jiske ange bhi laga do wo number mein convert ho jayega

let data4 = "six";
const bird = {
  six: "cool",
};
console.log(bird[data4]);
console.log(bird["six"]);
console.log(bird.six);
console.log(bird.data4);
// 60
let a6 = 3;
let b6 = new Number(3);
console.log(a6 == b6);
console.log(a6 === b6);
// b ko ek object ki tareh lega kyuki number has a constructor hain
//
