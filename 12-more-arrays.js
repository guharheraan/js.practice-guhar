const fruits = ['banana', 'apple', 'mango'];
const vagitables = ['potato', 'tomato', 'brinjal'];

// fruits.push(vagitables); // Adds vegetables array to the fruits array
// console.log(fruits);

let newarr = fruits.concat(vagitables); // Concatenates two arrays without modifying original arrays
console.log(newarr);

let spreadoperator = [...fruits, ...vagitables]; //this spread operator spreads the elements of the arrays into a new array.
console.log(spreadoperator);

let mynum = [1, 2, 3, 4, [1, 2], 5, 6, [5, 6, 8, 9, [0, 2, 1]]]; //here is a situation of nested arrays in such scenarios we should use the flat method to flatten the array.
let newnum = mynum.flat(2); // Flattens an array containing nested arrays into a single, flat array.
// It does not modify the original array.in the flat section we can define that how much in depth we want to flatten the array.
newnum.sort();
console.log(newnum);

console.log(Array.isArray('guhar heraan')); //it checks weather a set of data is an array or not.

console.log(Array.from('guhar heraan')); //creates and array from a string

console.log(Array.of(1, 2, 3, 4, 5, 6)); //creates an array from the given arguments

console.log(Array.from({ name: 'guhar' })); //creates an array from an object but if havent defined that wheather to create an array from the keyvalue pairs or from their values.
//as a result it will return an empty array bcz it cant directly change the object in the array.

let score1 = 100;
let score2 = 200;
let score3 = 300;

// let scores = [score1, score2, score3];
// console.log(scores); // ---------------------OR-----------------

console.log(Array.of(score1, score2, score3));

// this is the end of array for now we will see if it needs more work in this area .
