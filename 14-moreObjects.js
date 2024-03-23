//more about objects in js

const foo = new Object(); //this syntax will create an object in the memory but it will be a singleton object.

const bar = {}; //this syntax will create an object in the memory but it will be a singleton object.

const baz = Object.create({}); //this syntax will create an object in the memory but it will be a singleton object.

let instaUser = {
  name: 'guhar',
  email: 'guhar@.com',
  isLoggedIn: false,
};

// console.log(instaUser);

let fbUser = {};

fbUser.id = 12334;
fbUser.email = 'fbuser@gmail.com';
fbUser.isLoggedIn = true;

// console.log(fbUser);

//nested objects

let anyUser = {
  name: 'guhar',
  email: 'guhar@.com',
  isLoggedIn: false,
  fullName: {
    userFullName: {
      firstName: 'guhar',
      lastName: 'khan',
    },
  },
};

// console.log(anyUser.fullName);
// console.log(anyUser.fullName.userFullName.firstName);

let obj1 = { 1: 'a', 2: 'b', 3: 'c' };
let obj2 = { 4: 'd', 5: 'e', 6: 'f' };

// now to merge these two objects we use different methods like

//const obj3 = { obj1, obj2 }; //it merges both objects but the data in the objects is still seperated it has just included 2 objects in a single onject.

//const obj3 = Object.assign({}, obj1, obj2); //this syntax will merge both objects in a correct way. the empty {} are for the insurace that the result will be an object.

const obj3 = { ...obj1, ...obj2 }; //most used method to merge two objects called spread operator.
// console.log(obj3);

console.log(Object.keys(instaUser)); //this will return the keys of the object.datatype of the result will be an array.

console.log(Object.values(instaUser)); //this will return the values of the object and datatype of the result will be an array.

console.log(Object.entries(instaUser)); //this will return the key value pairs of the object.the result will have arrays inside an array.

console.log(fbUser.hasOwnProperty('isLogged')); //this will return true if the key is present in the object otherwise it will return false.
