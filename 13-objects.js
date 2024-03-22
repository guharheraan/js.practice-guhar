//objects in js
//when we use the object literal method to create an object then no singleton is created But if we
//used the object constructor method then a singleton is created.
//a singleton is an object that has only one copy of it in the memory.
//objects literals that has multiple instances in the memory.

//Object.create({});//this is the object constructor method.

//objects literals

let asymble = Symbol('heraan');
const mynishan = Symbol('its a symbol');

let myobj = {
  name: 'guhar', //here name is the key of the value "guhar".
  age: 24, //we can use these keys to access the values of the object
  phone: 123456789, //all the keys are stored as strings in the memory.
  email: 'guhar@.com',
  isLoggedIn: false,
  lastLoginDay: ['monday', 'tuesday', 'wednesday'],
  //asymble: 'heraan',
  [mynishan]: 'this is a symbol',
  //"education": 'BS Data Science', //if we defined any key this way we can only access it with the brckets method.
};

// console.log(myobj.email); //it accesses the value of the key from an object.
// console.log(myobj['email']); //key written in the string form can also be accessed through this method.

//Qno1: take a symbol define it and use it as key of the inside object and the print somthing through it.

// console.log(myobj.asymble);
// console.log(typeof myobj.asymble); // line 18 result ---->>> it returns the type of the symbol which is string that means symbol is not working as symbol.
// SO

// console.log(myobj[mynishan]);
// console.log(typeof myobj[mynishan]);
// console.log(myobj);

myobj.email = 'heraan khan @ gmail.com'; //this is how we can add new key value pair in the object.

myobj.greeting = function () {
  //here we are adding a new function to our existing object myobj.
  console.log('hello student');
};
// console.log(myobj.greeting); //when we call the greeting it means that the function is not executed but only referrence is available in the object.
// console.log(myobj.greeting()); //now the greeting function will get executed and it will print the hello student.
// console.log(myobj);

myobj.meetMe = function () {
  //here we are adding a new function to our existing object myobj.
  return `hello ${this.name} finaly we met!. aahhh`;
  // console.log(`hello ${this.name} finaly we met!. aahhh`); //the keyword(this) is used to access the properties of the object in the function body.
};

console.log(myobj.meetMe());
