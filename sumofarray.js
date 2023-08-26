// Write a function which sum array of numbers
// let sum = 0;
// const sumOfArray = (myArray) => {
//   myArray.map((a, i) => {
//     sum += a;
//   });
//   return sum;
// };
// let myArray = [10, 20, 30, 40, 50, 60, 70];
// console.log(sumOfArray(myArray));

//using js build in reduce method
let myArray = [10, 20, 30, 40, 50, 60, 70];

let sum = 30;
const sumOfArray = (myArray) => {
  return myArray.reduce((ac, cv) => ac + cv, sum);
};

console.log(sumOfArray(myArray));
