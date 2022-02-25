// let a = Number(prompt(`sonni kiriting:`));
// if (a % 2 === 0) {
//   console.log(`  Siz juft son kiritingiz. ${a} juft son`);
// } else {
//   console.log(`Siz toq son kiritingiz. ${a} toq son`);
// }
// let age = prompt(`yoshingizni kiriting:`);
// age > 18 && age < 45
//   ? console.log(`salom `)
//   : age <= 18
//   ? console.log(`patsan`)
//   : age >= 45
//   ? console.log(`qaribqobsiz`)
//   : console.log(`siz noto'g'ri son kiritdingiz`);
// function hisobla(birthYear, nowYear) {
//   yosh = nowYear - birthYear;
//   return yosh;
// }
// let a = Number(prompt(`tug'ilgan yilingizni kiriting:`));
// let b = Number(prompt(`Hozirgi yilni kiriting:`));
// alert(hisobla(a, b));

// let cars = ["bnw", "mersades", "tesla", 2500, "shkoda"];

// cars.splice(0, 2);
// console.log(cars);
// let about = {
//   job: ["Devoloper", "23"],
//   age: 20,
//   university: "TATU",
//   array: [25, 52, ["salom", "hello"]],

// };
// console.log(about.array[2][1]);
// console.log(about["age"]);
// const aboutMe = {
//   birth: 2002,
//   now: 2022,
//   calcAge: function () {
//     let age = function () {
//       return this.now - this.birth;
//     };
//   },
// };
// console.log(aboutMe.calcAge());
// let toq= function(){
//   for (let i = 1; i < 101; i + = 2) {
//     console.log(i);
//   }

// }
// toq();
// let juft =function(){
//   for (let i = 0; i < 101; i + = 2) {
//     console.log(i);
//   }
// }

// juft();
// let birth = [1996, 1998, 2000, 2002];
// let ages = [];
// let calcAge = function () {
//   for (let i = 0; i < birth.length; i++) {
//     let age = 2022 - birth[i];

//     ages.push(age);
//   }
// };
// calcAge();
// console.log(ages);
let a = Number(prompt(`sonni kirit`));
let arr = [2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] + arr[j] === a) {
      console.log(i);
      console.log(j);
    }
  }
}
