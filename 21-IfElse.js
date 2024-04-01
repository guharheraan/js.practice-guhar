//to understand the program control or  flow we need to understand the comparison operators.

// comparison operators are used to compare values and they can only provide  boolean output i.e either true or false.

// < - less than operator is used to check if a value is less than another value or not.
// > - greater than operator is used to check if a value is greater than another value or not.
//  =  - equal to operator is used to assign  values in a variable.
// == operator is used to check wheather one value is equal to another value or not.
// ===  operator checks both data type and value of two operands, it's called strict equality operator.
// <=  - less than or equal to operator checks whether first value is less than or equal to second value or not.
// >=  - greater than or equal to operator checks whether first value is greater than or equal to second value or not.
// !== operator also checks both data type and value but it returns if a values are not equal.
//  ! operator is used to reverse the boolean value i.e., true becomes false and vice versa.
// != operator is used to check if two values are not equal. It does not consider the data types.

// sometimes we need to execute some code and keep other code unexecuted  until certain condition gets satisfied.
// here if and else comes into discussion.

// this is the basic syntax of the ifElse statments
// if (condition) {
//   // code block to be executed if condition is true
// } else {
//   // code block to be executed if condition is false
// }

// if (15 < 10) {
//   console.log('5 is less than 10');
// } else {
//   console.log('5 is not less than 10');
// }

// a = 15;
// b = 10;

// if (a > b) {
//   console.log('a is the greater variable.');
// } else {
//   console.log('a is not the greater variable.');
// }

// this scope also comes into play here
// variables defined inside the ifelse  statement can only be accessed within that particular if-else block.

// if (1 > 0) {
//   let x = 'Hello'; //this variables will only be accessable inside this if scope.
//   console.log(`this the if scope ${x}`);
// } else {
//   console.log(`this the else scope ${y}`);
//   const y = 'World';
//   console.log(`if we want to access the "x" in this scope then ${x}`); //it will produce an error.
// }

// if we want to access "x" Or "y" outside of the if-else block,it will also produce the error
// bcz its not declared in the  outer/global scope.
// console.log(x);

// we can write the if statment without the {}  and just use one line of code like this:
// if (3 === 2 + 1) console.log('This is true');
// we can write it in multiple lines using commas ",".

// if (4 % 2 === 0) console.log('this is '),
// console.log('ture'); //But such code is highly unreadable and not recommended by  many developers.

// now let's discuss about nesting.

// const marks = 92;

// if (marks == 50) {
//   console.log('grade D');
// } else if (marks == 70) {
//   console.log('grade C');
// } else if (marks == 80) {
//   console.log('grade B');
// } else if (marks == 90) {
//   console.log('grade A');
// } else {
//   console.log('great marks bro!');
// }

// we use && to check multiple condition are true or not both of the conditions but me true to execute that code block.

// const userLoggedIn = true;
// const userDabitCard = true;

// if (userLoggedIn && userDabitCard) {
//   console.log('You are eligible for premium services.');
// }

// // we use || pipe sign to check multiple conditions  at once and only one of the condition but be true  to execute the corresponding block of code.

// const userGoogle = true;
// const userEmail = false;

// if (userGoogle || userEmail) {
//   console.log('User logged In and eligible for shopping');
// }
