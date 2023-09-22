// 3 / 15
let numerator = +prompt("Enter numerator: "); //chyselnyk
let denominator = +prompt("Enter denominator: "); //Znamennyk
let wholeNumber = 0;

if (!isNaN(numerator) && !isNaN(denominator)) {
  let numerator1 = numerator;
  let denominator1 = denominator;

  if (denominator === 0 || numerator === 0) {
    alert("The values can't be = 0!");
  } else {
    if (numerator > denominator) {
      const wholePart = Math.floor(numerator / denominator);
      const fractionalPart = numerator % denominator;
      console.log(`Fraction: ${wholePart} + ${fractionalPart}/${denominator}`);
    } else {
      while (denominator1 !== numerator1) {
        if (denominator1 > numerator1) {
          denominator1 -= numerator1;
        } else {
          numerator1 -= denominator1;
        }
      }
      console.log(
        `Fraction: (${numerator / numerator1} / ${denominator / denominator1})`
      );
    }
  }
} else {
  alert("Please, enter correct values!");
}
