"use strict";

let totalCandies = +prompt("Введіть к-ть цукерок: ");

if (!isNaN(totalCandies)) {
  while (totalCandies > 0) {
    let eatCandy = confirm("Ще цукерку?");

    if (eatCandy) {
      totalCandies--;
      alert("З'їдається!");
      alert(`Залишилось: ${totalCandies} цукерок!`);

      if (totalCandies === 0) {
        console.log("Пора купувати іншу коробку...");
      } else if (totalCandies > totalCandies / 2) {
        console.log("Цукерок ще багато!");
      } else if (totalCandies < totalCandies / 2 && totalCandies > 3) {
        console.log("Цукерок обмаль!");
      } else {
        console.log("Цукерки закінчуються!");
      }
    } else {
      alert("Коробка закривається!");
      break;
    }
  }
}
