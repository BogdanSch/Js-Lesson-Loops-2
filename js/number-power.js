"use strict";

let number = +prompt("Enter your number: ");
let x = 1;
let result = 1;

if (!isNaN(number)) {
  let q = 2, b1 = 1;
  let totalAmount = b1 * (1 - q ** number) / (1 - q);
  let totalMass = totalAmount * 0.065 / 1000;

  console.log(`Total mass for number ${number} = ${totalMass}kg`);
  // for (let i = 0; i < number; i++) {
  //   x *= 2;
  //   result += x;
  //   document.write(result + "<br>");
  // }
}
else{
    alert("Error, please enter a correct value!");
}
