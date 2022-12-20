const squareDigits = (number) => {
  let digits = number.toString().split("");
  let realDigits = digits.map(Number);

  let lastDigits = [];
  for (const r in realDigits) {
    const powerDigit = realDigits[r] ** 2;
    lastDigits.push(powerDigit);
  }

  return parseInt(lastDigits.join(""));
};

console.log(squareDigits(9119));
console.log(squareDigits(0));
