// 3 / 15
const m = 15;
const n = 3;

let m1 = m;
let n1 = n;

while (m1 !== n1) {
  if (m1 > n1) {
    m1 -= n1;
  } else {
    n1 -= m1;
  }
}

console.log(`${n / n1} / ${m / m1}`);
