// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

const myFunct = () => {console.log("Function was invoked!");}
myFunct();


// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

const anotherFunct = (param) => {return param;}
anotherFunct("Example2");


// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

const addition = (p1, p2) => {return p1 + p2};
addition(5, 5);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

const subtraction = (p3, p4) => {return p3 - p4};
subtraction(6, 5);


// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

arr = [1, 2, 3, 4];
const trip = arr.map((num) => {return num * 3});
console.log(trip)