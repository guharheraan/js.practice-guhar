//scope in Js

//when we use variabels in such way it doesnt affect the scope of any function or variable and dont create any problems
// let a = 10;
// const b = 20;
// var c = 30;
//bcz its in the global scoop and we are accessing it also from the global scope.
// console.log(a);
// console.log(b);
// console.log(c);

//--------------------- BUT ------------------------- >>>>
//
if (true) {
  let a = 10; //let will not be printed bcz its not in the global scope so we cant access it from the outside.
  const b = 20; //const is also same as the let  but not able to be reassigned or modified.
  var c = 30; //var will be printed even if it is not declared in the global scope and this will create problems in the code.
  //thats why most of the programmers avoid to use "var".

  //   console.log('the inner let is : ', a); //we can access the value declared inside any scope while staying in the same scope.

  //we can acces any global variable inside any scope but not the vice versa.
}

// console.log(a);
// console.log(b);
// console.log(c);

function father() {
  //here the parent element has some value that can be access by its child.
  let ice_cream = 'you can have it son!.';

  //   console.log(whoWantedIt); //it's not a good thing to take something from toddlers and eat it so the parent can't access any value
  //from its child . this is some times called "clouser".

  function child() {
    let whoWantedIt = 'the child wanted ice cream from his father.';
    // console.log(ice_cream); //the child can access the parent all values.
  }

  child();
}

father();

//same thing happens when there is if/else used.

if (true) {
  name = 'guhar';
  //   console.log(lastName); //there we go it will produce the same error  because lastName is not defined here.
  if (true) {
    lastName = ' heraan';
    // console.log(name + lastName);
  }
}

//------------------------ somthing more about functions and a touch of hoeisting -----------------------------

console.log(addOne(1)); //we can call the same function before initialization of it.

//here is a simple function  which takes an argument and add one to it.
//this function is not store in any variable or constant taht why we can call it before initialization.
function addOne(num) {
  return num + 1;
}

// console.log(addOne(1)); //here we are calling the function and it gets the value 2.

// console.log(increment(1)); //when we call this function from here it will produce errors.

//here is another function that add 2 to any given number and it is store in a variable called "increment"
//this function can not be called bofore initialization.
let increment = function (num) {
  return num + 2;
};

console.log(increment(1)); //when we call it from here it will give results.

//this whole behavoir  of JavaScript functions is known as Function Hoisting.
