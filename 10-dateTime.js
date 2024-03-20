//DATE and TIME in JS.

let myDate = new Date();

console.log(myDate); // print the current day date and time

console.log(myDate.toString()); // returns a string representation of the date.

console.log(myDate.toDateString()); //returns a string representing the date portion of the Date object.

console.log(myDate.toISOString()); //Returns a string containing a UTC date.

console.log(myDate.toJSON()); //

console.log(myDate.toLocaleDateString()); // Returns a string with a language sensitive date format.

console.log(myDate.toLocaleString(undefined, { hour12: true })); //This will display the time in  12-hour format along with the local time.

console.log(myDate.toUTCString()); // Converts a date to a string using Universal Coordinated Time (UTC).

console.log(
  '____________________________________________________________________'
);

let DoB = new Date('2000-09-17');
let anyDate = new Date(2023 - 00 - 24); //this format is not working properly why?

console.log(DoB);

console.log(DoB.toString());

console.log(anyDate.toString());

console.log(
  '____________________________________________________________________'
);

let timeStamp = Date.now();

console.log(timeStamp); //show time in miliseconds from jan  1, 1970 till now .

console.log(DoB.getTime()); //show time in miliseconds  from jan  1, 1970 till the specified date.

console.log(Math.floor(Date.now() / 1000)); //convert time stamp into seconds.

console.log(
  '____________________________________________________________________'
);

let someDate = new Date();

console.log(someDate);
console.log(someDate.getMonth() + 1);
console.log(someDate.getDay());

console.log(someDate.toLocaleString('default', { month: 'long' })); //returns the long representation of month.we can define any style through this localestring functions.
