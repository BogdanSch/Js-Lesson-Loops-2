"use strict"

function factorial(number) {
    let result = 1;

    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    return `Result !${number} = ${result}`;
}

function fibonacci(number) {
    let fPrevious = 1, fNew = 1;
    let result = "1 ";

    for (let i = 0; i < number; i++) {
        result += fNew + " ";
        let fNext = fPrevious + fNew;

        fPrevious = fNew;
        fNew = fNext;
    }

    return result;
}

let number = +prompt("Enter n value: ");

if(!isNaN(number)){
    alert(factorial(number));
    alert(fibonacci(number));
}
else{
    alert("Enter correct value!");
}