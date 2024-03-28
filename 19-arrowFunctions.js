//to understand Arrow functions we need to understand "THIS" keyword
//So

let student = {
  studentName: 'guhar',
  age: 20,

  studentDetails: function () {
    //"THIS" key word is used to access the values of the same object even if somone changed the values of the object.
    //"THIS" is only used in onjects and do not work in functions.
    //console.log(`well come ${this.studentName} your age is ${this.age}.`);
    //if we print "this" inside an object it will show us --->>> run the code
    // console.log(this);
  },
};
// student.studentDetails();

// console.log(this); //this is the global object in the browser.
//but in node environment it shows an {} set BUT when we do the
//same in the console of the browser it wil show us the "window" global object.

//if we try to use "THIS" keyword inside a function it will not work.

// function abc() {
//   let myName = 'guhar';
//   console.log(this.myName);
// }

// abc(); //it prints undefined because this keyword is not used inside a function body.

// function abc() {
//   console.log(this);
// }

// abc(); //now it prints the global object and show some more details.

// --------------------------------- ARROW FUNTIONS --------------------------------------------

// till now we use to declare functions like this

// function xyz() {
//   return xyz + 1;
// }

// //------- OR --------

// let myFunc = function () {
//   return myFunc + 1;
// };

//-------- but now we can use Arrow functions like this --------

let arrowFunc = (a, b) => {
  //this type of function is called "Arrow function" and its also an explicit return.
  return a + b;
};

// console.log(arrowFunc(1, 2));

//we can write the same function like this also.

const addTwo = (a, b) => a + b; //this is an implicit return.

// console.log(addTwo(1, 2));

//---------- OR ----------

// const addThree = (a, b) => (a + b); //this is an implicit return.but if we used {} then we need to write the return keyword.

// console.log(addThree(3, 4));

//if we want to return an object from the function we can do like this.

// const addFour = (a, b) => ({ a: a, b: b }); //this is an implicit return.
// console.log(addFour);

//if we want to return an object explicitly then we can do like this.
