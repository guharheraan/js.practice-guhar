//ARRAYS can have any kind of data types and store it,they store the values based  on index.
//index always starts from 0.

let arr = [1, 2, 3, 'hello', true];

console.log(arr);

let newarray = new Array(1, 2, 3, 4, 5, 6); //this method doesnt need [] it automatically add it to it
console.log(newarray);

// array methods

// newarray.push(7); //adds a value at last
// console.log(newarray);

newarray.pop(); //pop will automatically remove the last value of the array.it doesn't take any value.
console.log(newarray);

newarray.unshift(8); //it shifts all the elements of array to add an element in the start.
console.log(newarray);

newarray.shift(); //removes first element of array and it doesn't take any value.
console.log(newarray);

console.log(newarray.includes(9)); //returns boolean if that number is present or not.

console.log(newarray.indexOf(3)); // returns the position of the given element.if not found then -1

let fruits = ['apple', 'banana', 'mango'];
fruits[3] = 'orange'; //you can assign any value to any index you want.
//but if we try to access something which is out of bound it gives undefined.
console.log(fruits);

let convertArray = newarray.join(); // converts the array into string
console.log(convertArray);
console.log(typeof convertArray);

console.log(newarray.reverse()); //reverses the the comolete array

console.log(newarray.sort()); // sorts the array in ascending order and it doesn't change the original array.

console.log(newarray.sort().reverse()); // sorts the array in descending order and it doesn't change the original array.

console.log(newarray.slice(0, 3)); //creates a new array from the given index to the given index but it doesn't change the original array.
//it doesn't include the last index.

console.log(newarray);

console.log(newarray.splice(1, 3)); //creates a new array from the given index to the given index and it changes the original array.
//it includes the last index.
console.log(newarray);
