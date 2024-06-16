function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (obj instanceof Array) {
    let arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepClone(obj[i]);
    }
    return arrCopy;
  }

  if (obj instanceof Object) {
    let objCopy = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        objCopy[key] = deepClone(obj[key]);
      }
    }
    return objCopy;
  }

  throw new Error("Unable to copy object! Its type isn't supported.");
}

// Example usage:
const original = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
  f: [1, 2, [3, 4]],
  g: new Date(),
};

const copy = deepClone(original);

console.log(copy);
console.log(copy !== original); // true
console.log(copy.b !== original.b); // true
console.log(copy.f !== original.f); // true
console.log(copy.g !== original.g); // true
