let max = function (a, b, c) {
  if (a > b && a > c) {
    console.log(`eng katta son:${a}`);
  } else if (b > a && b > c) {
    console.log(`eng katta son:${b}`);
  } else if (c > a && c > b) {
    console.log(`eng katta son:${c}`);
  } else {
    console.log(`siz teng son kiritdingiz`);
  }
  if (a < b && a < c) {
    console.log(`eng kichik son:${a}`);
  } else if (b < a && b < c) {
    console.log(`eng kichik son:${b}`);
  } else if (c < a && c < b) {
    console.log(`eng kichik son:${c}`);
  } else {
    console.log(`siz teng son kiritdingiz`);
  }
};
let n = Number(prompt(`birinchi sonni kiriting: `));
let m = Number(prompt(`Ikkinchi sonni kiriting: `));
let k = Number(prompt(`uchinchi sonni kiriting: `));
max(n, m, k);
