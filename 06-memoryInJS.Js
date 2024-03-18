// stack memoy include all the premitive datatypes
// and when we wanna change it we are provided with a
// copy of the original variable so if we change anything
// it does not affect the original variable

// let myName = 'guhar';
// console.log(myName);

// let student = myName;
// console.log(student);

// student = 'John Doe';

// console.log(student);
// console.log(myName);

//the heap memoy store all the non-premitive datatypes
//and when we wanna change something we are provided with
//the refference of the original variable so if we change somthing
//the change will affect the original variable

let student1 = {
  email: 'student@hotmailcom',
  age: 20,
};

console.log(student1.email);
let teacher = student1;

teacher.email = 'teacher@gmail.com';

console.log(student1.email);
console.log(teacher.email);
