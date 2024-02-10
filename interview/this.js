// this.a = 5;
// console.log(this);
let user = {
  name: "Mayank",
  age: "20",
  getdetails() {
    const newslater = () => {
      console.log(this.name);
    };
    newslater();
  },
};
user.getdetails();
let data = {
  name: "amaynk",
  age: "20",
  getdetails() {
    const name = "mayankrathore";
    console.log(this.name);
  },
};
data.getdetails();

// if this is used refer to the current object if the arrow function is there is used to refer to object
let user3 = {
  name: "amaynk",
  age: "20",
  getdetails: () => {
    const name = "mayankrathore";
    console.log(this.name);
  },
};
user3.getdetails();
// ################################
// call()
const animal = [
  {
    species: "lion",
    name: "king",
  },
  {
    species: "Whale",
    name: "queen",
  },
];
function printAnimals(i) {
  this.print = function () {
    console.log("#", i + "", +this.species + ":" + this.name);
  };
  this.print();
}
for (let i = 0; i < animal.length; i++) {
  printAnimals.call(animal[i], i);
}
const array = ["a", "b"];
const elemn = [1, 2, 3];
array.push.apply(array, elemn);
console.log(array);

let arr1 = [1, 2, 3, 4];
let arr2 = ["hello", 3, 4, 5];
let arr3 = [...arr1, ...arr2];
console.log(arr3);
console.log(Math.max.apply(null, arr1));
