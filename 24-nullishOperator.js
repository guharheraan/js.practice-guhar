// Nullish coalescing operator (??) :null and undefined

let num;

// num = 5 ?? 10; //this line means that if  the variable "num" is null or undefined it will be assigned with value of 10.
// num = null ?? 10; //now the value has a null first in line to store so it will store the 10 value and not null.

// num = undefined ?? 15; //if the value is undefined then the same case applies here also as the null value.

// in cases where we have multiple function and they return something e.g the first function returns
// a null values the second returns 10 and third returns  20, so if you use "??" operator then

// num = null ?? 10 ?? 20; //the  output will be 10 because it checks for null or undefined and stops at the first values
// returned from the function  which has a non-null value will be assigned to the variable 'num'.

console.log(num);

// poeple always get confused in the nullish coalescing operator and the terniary operator.

// terniary operator is a shorthand of "ifelse" statements where we write the conditions in the first place
// then we use "?" and write our True staement and the use ":" and write the false statment.

// condition ?? true : false

// here is a simple example of terniary operator.
let marks = 34;

marks <= 50 ? console.log('fail') : console.log('pass');
//  if marks are lessthan or equal to 50 then  print fail else pass.
