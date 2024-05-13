function armstrong(num) {
  const numstring = num.toString();
  const numDigit = numstring.length;
  let sum = 0;
  for (let i = 0; i < numDigit; i++) {
    sum += Math.pow(parseInt(numstring[i], 10), numDigit);
  }
  return sum === num;
}
const inputnumber = 153;
if (armstrong(inputnumber)) {
  console.log(`${inputnumber} is armstrong`);
} else {
  console.log(`${inputnumber} is not armstrong`);
}
