// what if we store the forEach loop in a variable and then print it let's see what happens.

const languages = ['c++', 'python', 'java', 'ruby', 'javascript', 'c#'];

const mylangs = languages.forEach((item) => {
  //   console.log(item);
  return item;
});

// console.log(mylangs); //it returns undefined which means that the forEach does not return anything.

// to solve this problem we have the the filter  method, so lets use it:

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// if we use the {} then we need to define explicitly that  we want to return something from inside of our callback.
const newNums = myNums.filter((item) => {
  //   console.log(item * 2);
  return item * 2;
});

// console.log(myNums);
// console.log(newNums);

// but if we used the () then we do not need to define the return  statement because by default it will return whatever is inside.
// this is called the implicit return.

const greaterNums = myNums.filter((num) => num > 5);

// console.log(greaterNums);
// console.log(myNums);

const classMates = [
  { name: 'raban', age: 34, city: 'kohat', DoB: 1990 },
  { name: 'zeb', age: 23, city: 'lahore', DoB: 2010 },
  { name: 'hurraira', age: 20, city: 'multan', DoB: 1992 },
  { name: 'waseem', age: 25, city: 'karachi', DoB: 2024 },
  { name: 'qari', age: 12, city: 'islamabad', DoB: 1994 },
  { name: 'saad', age: 21, city: 'sarghodha', DoB: 2001 },
  { name: 'saif', age: 19, city: 'rawalpindi', DoB: 1996 },
  { name: 'kamran', age: 17, city: 'chakwal', DoB: 2011 },
  { name: 'nimra', age: 27, city: 'koita', DoB: 2009 },
  { name: 'taqwa', age: 28, city: 'peshawar', DoB: 2004 },
  { name: 'attaullah', age: 31, city: 'dara adamkhel', DoB: 2000 },
];

// console.log(classMates);

// let student1 = classMates.filter((item) => item.name === 'raban');

// let student2 = classMates.filter((num) => {
//   return num.name === 'zeb' || num.city === 'lahore';
// });

// let student3 = classMates.filter((std) => std.DoB >= 2000);

console.log(student3);

// the filter works on the true/false base if any value is true then it will return somthing otherwise nothing will be returned.
