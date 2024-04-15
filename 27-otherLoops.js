//for of loop

let myArr = [1, 2, 3];

for (const num of myArr) {
  //   console.log(num);
}

const greetings = 'hello world!';

for (const character of greetings) {
  //   console.log(`each character is ${character}`);
}

//map in javascript

// maps can store values in key value pair type like the objects.
// maps remenbers the order of the values  as they are inserted.
// maps store only unique values  . if we try to insert a duplicate it will not be added into the map.

let m1 = new Map();

m1.set('student1', 'guhar');
m1.set('student2', 'Akash');
m1.set('student3', 'heraan');
m1.set('student2', 'Akash');

// console.log(m1);

// we can iterate the whole map and it will return its values in the  form of an arrays.
// for (const num of m1) {
//   console.log(num);
// }

// But if we want the keys and its values specifically then
// we can destructure the map so we can access the values and its values seperatly.
for (const [std, name] of m1) {
  //   console.log(`${std} is ${name}`);
}

// the for of loop doesnt work in simple objects so we have other methods to iterate objects.
const students = {
  std1: 'raban',
  std2: 'akshay',
};

// for (const std of students) {
//   console.log(std);
// }

// for in loop

const teachers = {
  naveed: 'thoery of automata',
  muzamil: 'data structures',
  guhar: 'data science',
  heraan: 'artificial intellengence',
};

// objects were not iteratble through the for of loop but we can try the for in and see what happens.

// for (const sir in teachers) {
//   console.log(sir);
// } //it we only return the keys .

// for the values to access though this loop we will use a specific syntax.
for (const sir in teachers) {
  //   console.log(`${sir} teaches us ${teachers[sir]} `);
  //this way we are returning both the key as well as value from the object.
}

// to access on the values of the keys we can us the following syntax.
for (const key in teachers) {
  //   console.log(teachers[key]);
}

const tutors = [
  'naveed',
  'aun abbas',
  'muzamil',
  'hammed gull',
  'shinvari sir',
  'afaq sir',
];

// when we apply the forIn loop on array it returns the keys as the array index
//  which starts from 0 and goes upto the arrays length.
for (const key in tutors) {
  //   console.log(key);
}

//  if you want to get the actual data that is stored in each element of an array,
//we use the bracket notation.
for (const key in tutors) {
  //   console.log(tutors[key]);
}

const m2 = new Map();

m2.set('name', 'guhar');
m2.set('age', 24);
m2.set('city', 'Lahore');

// console.log(m2);

// lets iterate maps through the forIn loop and see what happens.

for (const key in m2) {
  // console.log(key);
} //it does not work on maps.

// we can use the forOf loop on arrays,strings and maps  but not on objects.
// for onjects we can use the forIn loop .
