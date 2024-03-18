let myName = 'guhar';
let mySalary = 2000;
console.log(
  'my name is ' + myName + 'my salary is about ' + mySalary + 'thousand.'
);
// but this methode is outdated nowadays , so we use template literals;

let template = `my name is ${myName} and my salary is about  ${mySalary} thousand.`;
console.log(template);
console.log(typeof template);
// this method is also called string  interpolation.

const person = new String('muzamil khan'); //its a different method to declare  a string .

console.log(typeof person);

//some important functions/methods of strings are as follow:

console.log(person.length); //to find the length of the  string.

console.log(person.toUpperCase()); //converts the entire string to upper case laters.

console.log(person.toLowerCase()); // converts the entire string to lower case letters.

console.log(person.substring(0, 4)); // to creat multiple strings of a single string but it doesn't change the original value bcz its a stack memory datatype.

console.log(person.charAt(3)); //returns the character at the given index.

console.log(person.indexOf('l')); //returns the index of a given character.

console.log(person.includes('guhar')); // returns if a character or number of characters exists in a string or not.

let strArray = console.log(person.split(' ')); //splits the string into an array

console.log(typeof strArray);

console.log(person.replace('khan', 'guhar')); //converts the selected characters or words into new character entered during this string method.

let name = new String('john doe guhar doe heraan doe khan');
console.log(name.replaceAll('doe', 'new')); //replaces  all occurances of a substring with another substring.

let index = 9;

console.log(
  `the index ${index} will return its value from the name string ${name.at(
    index
  )}`
); //run it and see the results yourself you will get it.

console.log(name.concat(',', person)); // adds the any two strings  together.

console.log(name.endsWith('khan')); //checks whether a strings ends with the mentioned characters or not.

console.log(name.isWellFormed());

console.log(person.repeat(3)); //repeats any string defined number of times

console.log();
console.log();
console.log();

//there are lots of function/methods of string check it out at
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
