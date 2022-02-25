let exchange = function (a, b) {
  let c = a;
  a = b;
  b = c;
  console.log(a, b);
};
let n = prompt(`Birinci sonni kiriting:`);
let m = prompt(`ikkinchi sonni kiriting:`);
exchange(n, m);
