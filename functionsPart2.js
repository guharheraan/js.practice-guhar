//something more about the functions

// function cartPrice(price) {
//   return price;
// }

// console.log(cartPrice(200, 500, 700, 900)); //only the first element will get printed and not the rest of the .

//to solve this problem we can use rest operator

function cartPrice(...price) {
  return price;
}

// console.log(cartPrice(200, 500, 700, 900));//now it will return an array of all the elements in that we can use in different ways.

let user = {
  name: 'subhan',
  age: 23,
  salary: 10000,
  address: 'lahore',
};

//here is how we use objects with functions

function validateUser(anyuser) {
  return `use name is  ${anyuser.name} and user is from ${anyuser.address} city.`;
}

// console.log(validateUser(user));
// console.log({
//   name: 'jakakhan',
//   address: 'multan sultans',
// });                           //we can pass an object directly in the function

//how to pass arrays through functions

let myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function passArray(anyArray) {
  return anyArray[1];
}

// console.log(passArray(myarr)); //we can pass an array directly in the function
// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10][9]);
