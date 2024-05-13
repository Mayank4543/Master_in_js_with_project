function factorial(num) {
  let result = 1;
  if (num < 0) {
    return "Factorial of number is not define for negative ";
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
  }
  return result;
}
const value = factorial(3);
if (value) {
  console.log(`${value} is the factorial:`);
} else {
  console.log(`first`);
}
function prime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
const value1 = prime(7);
if (value1) {
  console.log(`${value1} is a prime number`);
} else {
  console.log(`${value1} is not a prime number`);
}
// Function to calculate the square of each element in the array
function squareArray(arr) {
  const square = arr.map((element) => element * element);
  let b = 0;
  for (let i = 0; i < square.length; i++) {
    b = b + square[i];
  }
  return b;
}

// Example usage
const originalArray = [1, 2, 3, 4, 5];
const squaredArray = squareArray(originalArray);

console.log("Original Array:", originalArray);
console.log("Squared Array:", squaredArray);
