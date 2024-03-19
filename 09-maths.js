//maths library comes bydefaulte with the javascript

// console.log(Math.round(45.6789));
// console.log(Math.abs(-34));
// console.log(Math.ceil(27.1234));
// console.log(Math.floor(27.9999));
// console.log(Math.max(2, 3, 5, 8, 4, 1));
// console.log(Math.min(0, 3, 9, 2, 5, 7, 2, 4, 2));

console.log(Math.random()); //generates a random number between 0 and 1.
console.log(Math.random() * 10); //to get value between  0-9
console.log(Math.random() * 10 + 1); // to ensure that 0 is not include in any number OR we dont want the 0 number.

let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max - min) + min)); //between  10 to 20
console.log();
