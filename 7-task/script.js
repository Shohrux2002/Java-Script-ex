"use strict";
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 51];
let usluga = [];
let total = [];
let calc = function () {
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] < 50 && bills[i] > 300) {
      usluga.push(bills[i] * 0.15);
      total.push(bills[i] + bills[i] * 0.15);
    } else {
      usluga.push(bills[i] * 0.2);
      total.push(bills[i] + bills[i] * 0.2);
    }
  }
};
calc();
console.log(usluga);
console.log(total);
