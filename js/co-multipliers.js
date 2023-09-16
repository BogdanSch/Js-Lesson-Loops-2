"use strict";

function coMultipliars(number) {
  let result = "";

  for (let k = 1; k <= number; k++) {
    if (number % k === 0) {
      result += `${k} `;
    }
  }

  return result;
}

function simpleMultipliars(number) {
  let result = "";

  let k = 2;
  while (number > 1) {
    if (number % k === 0) {
      result += `${k} `;
      number /= k;
      continue;
    }
    k++;
  }

  return result;
}

let number = +prompt("Enter your number: ");

if (!isNaN(number)) {
  alert(simpleMultipliars(number));
} else {
  alert("Error, please consider entering a correct one!");
}
