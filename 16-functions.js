// lets learn about functions in js

function saymyname() {
  //   console.log('my name is guhar');
}

saymyname();

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// console.log(addTwoNumbers(2, 3));

function subtract(no1, no2) {
  //   console.log(no1 - no2);
  return;
}

let subtraction = subtract(10, 5);
// console.log(subtraction);

// function userLoginNotifiation(username) {
//   return `${username} just logged in.`;
// }

// console.log(userLoginNotifiation('guhar'));
// console.log(userLoginNotifiation()); //undefined

function userLoginNotifiation(username = 'unknown') {
  //(username === 'unknown') is a default value for this function if no arguments where passes to this function it will printout this default value.

  if (username === undefined) {
    //(!username) we can use this syntax as well
    console.log('please enter a username...');
    return;
  }
  return `${username} just logged in.`;
}

console.log(userLoginNotifiation('heraan'));
