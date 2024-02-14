// An object is collection of properrty and and a properties  is association between a name and key script
// if you have two key first key as replace has
const obj = {
  name: "Mayank",
  age: 21,
  rollno: "18",
};
delete obj.name;
// for (key in obj) {
//   console.log(obj[key]);
// }
// if you have two key first key as replace has but the key is in first postiion
const obj2 = {
  a: "a",
  b: "b",
  a: "c",
};
console.log(obj2);
const obj3 = {
  a: 200,
  b: 400,
  title: "hey",
};
multiply(obj3);
function multiply(obj3) {
  for (key in obj3) {
    if (typeof obj3[key] === "number") {
      obj3[key] *= 2;
    }
  }
}
console.log(obj3);
const obj4 = {
  name: "Mayank",
  age: 28,
};
const strin = JSON.stringify(obj4);
console.log(strin);
const user = {
  name: "Mayank",
  age: 28,
};
let admin = {
  username: "rathore",
  firstname: {
    sdbsd: "sdbfj",
    sdv: "cjhc",
  },
  ...user,
};
// const {
//   firstname: { sdbsd },
// } = admin;
console.log(admin);
const value = { number: 10 };
const multiplgfy = (x = { ...value }) => {
  console.log((x.number *= 2));
};
multiplgfy();
multiplgfy();
multiplgfy(value);

multiplgfy(value);
const obj6 = {
  name: "aa",
  age: 21,
};
const admin2 = {
  username: "Mayank",
  firstname: {
    hi: "hey",
    hello: "haa",
  },
  ...obj6,
};
const { username: Name } = admin2;
console.log(Name);
