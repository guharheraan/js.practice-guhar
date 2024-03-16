// comparison operators

// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 <= 1);
// console.log(2 >= 1);

// the result will be either true or false

// but here is a problem in it when compare the Null with 0 then

// console.log(null > 0);
// console.log(null < 0);
// console.log(null <= 0);
// console.log(null >= 0);
// console.log(null == 0);
// console.log(null != 0);

// this is bcz the coparison  operator try to convert the null and undefined value into number using ToNumber conversion method

//strict check operator

// the  strict equality operator (===) returns true if the values  of two operands are strictly equal, and also
// '===' means that both value and type should match
// '!==' means that both value and type should not match

// console.log(3 === '3'); //false because one of them is string other is number so they are different types hence false

// console.log('Hello' === 'Hello'); //true because both values and types same

let biggi = 1234567890987654n;

console.log(typeof biggi);
