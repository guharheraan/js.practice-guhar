//object destructuring in js

let user = {
  name: 'john doe',
  rollNo: 1234,
  university: 'kohat uni of scince and tech',
  courseTutor: 'khan',
};

console.log(user);
console.log(user.courseTutor); //to access the courser instructure we will use this but we can destructure the object and shortern the accessing method.

const { courseTutor } = user; // now we can access just using  "courseTutor" in console log.

console.log(courseTutor);

//if we wanna change the name of the courseTutor we can do it like this.

const { courseTutor: teacher } = user;

console.log(teacher);

//destructuring is just for the ease of accessing the properties of the object.if one doesn't wanna use it they can but alot of programmers use it so now its up to you.
