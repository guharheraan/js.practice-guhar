// for loop in js
// for loop is used when we know how many times we want to iterate a block of code.

// here is a simple syntax of for loop

// for (let index = 0; index < 10; index++) {
//   const element = index;
//   console.log(element);
//}  //it will print the  numbers from 0 to 9

// OR what we usually use in programming is like

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   console.log(element);
// } //here it will print the numbers starting from zero and to the 10th number includeing 10.

// we can nest and mixup the loops with  if statement as well.

// for (let j = 0; j < 10; j++) {
//   const element = j;
//   if (j == 5) {
//     console.log('5th value detected.');
//   }
//   console.log(element);
// }

// we can nest a for with with another for loop.

// for (let i = 0; i <= 10; i++) {
//   console.log(`the outer loop values : ${i}`);
//   for (let j = 0; j <= 3; j++) {
//     console.log(`The inner loop values: ${j}`);
//   }
// }

// let's print all the tables in a single nested for loop as an example

// for (let i = 1; i <= 10; i++) {
//   console.log(`the table of ${i} is :`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} *  ${j} = ${i * j}`);
//   }
// }

// the story of break and continue in for loop let's explore it

// ----------------- the BREAK ----------------------------------

// for (let i = 0; i <= 10; i++) {
//   if (i === 4) {
//     console.log(`detected number 4 boss!`);
//     console.log(`the program is being break now relax everyone!`);
//     break;
//   }
//   console.log(`The current value is : ${i}`);
// }

// ------------------ the CONTINUE ----------------------------

// for (let i = 0; i <= 10; i++) {
//   if (i === 4) {
//     console.log(`detected number 4 boss!`);
//     console.log(
//       `its a defected product but the production is continueing no problem!`
//     );
//     continue;
//   }
//   console.log(`The current value is : ${i}`);
// }

// let's try the for loop on an array

let myArr = ['guhar', 'heraan', 'muzamil'];
console.log(myArr.length);
for (let i = 0; i < myArr.length; i++) {
  const element = myArr[i];
  console.log(element);
}
