const date = new Date();
console.log(date);

const date2 = new Date("2021-1-16 13:15:57");
console.log(date2);

const arr = ["red", "green"];
console.log(arr);

const arr2 = new Array("hello", "man");
console.log(arr2);

console.log(typeof arr);
console.log(typeof arr2);
console.log(typeof date);

const pi = "3.14";
console.log(typeof pi);

const num = 5;

if (num > 4) throw new Error("Number is too large");
