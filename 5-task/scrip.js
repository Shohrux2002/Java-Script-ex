"string mode";
const delfinBal = [85, 54, 41];
const kualaBal = [23, 34, 27];
let calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

let delfinlarNatija = calcAverage(delfinBal[0], delfinBal[1], delfinBal[2]);
let koalalarlarNatija = calcAverage(kualaBal[0], kualaBal[1], kualaBal[2]);
if (2 * delfinlarNatija <= koalalarlarNatija) {
  console.log(`Kualalar g'olib bo'ldi`);
} else if (delfinlarNatija >= 2 * koalalarlarNatija) {
  console.log(`delfinlar g'alaba qozondi`);
} else {
  console.log(`hech kim g'olib bo'lmadi`);
}
