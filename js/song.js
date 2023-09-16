"use strict";

let bottlesAmount = +prompt("Enter amount of bottles: ");
let drinkName = prompt("Enter your drink name: ");

if (!isNaN(bottlesAmount)) {
  for (let i = bottlesAmount; i > 0; i--) {
    console.log(`${i} bottles of ${drinkName} on the wall,
    ${i} bottles of ${drinkName},
    If one of those bottles should happen to fall
    ${i - 1} bottles of ${drinkName} on the wall,`);
  }
  console.log(`No more bottles of ${drinkName} on the wall, no more bottles of ${drinkName}.
  There's nothing else to fall, because there's no more bottles of ${drinkName} on the wall.`);
}
