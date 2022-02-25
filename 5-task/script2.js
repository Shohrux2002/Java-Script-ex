"string mode";
let kalkulyator = function (a, b, c) {
  switch (c) {
    case `*`:
      console.log(a * b);
      break;
    case `-`:
      console.log(a - b);
      break;
    case `+`:
      console.log(a + b);
      break;
    case `/`:
      console.log(a / b);
      break;
    default:
      console.log(`noto'g'ri amal kiritdingiz`);
  }
};
let n = prompt(`Birinchi sonni kiriting:`);
let m = prompt(`Ikkinchi sonni kiriting:`);
let k = prompt(`amalni  kiriting:`);
kalkulyator(n, m, k);
