// let's use the reduce method of js which is mostly used to add the complete array
// reduce method is used to find the total price of the items available in shopping cart in reallife applications.

const nums = [1, 2, 3];

// the reduce method also accept the callback function and always returns a value.
// here we will need initail_value , accumulator and the  current value.

inittial_value = 0;
const totalNums = nums.reduce(function (accumulator, current_value) {
  return accumulator + current_value;
});

// console.log(totalNums); //it works properly now let's understand its working.

// we can write in many ways

// const total = nums.reduce(function (acc, currVal) {
//   console.log(`accumulator is ${acc} and the current value is ${currVal}`);
//   return acc + currVal;
// }, 0);

// console.log(total);

// here we are using  arrow functions so that it becomes more simpler.

const totalValue = nums.reduce((acc, currVal) => acc + currVal, 0);

// console.log(totalValue);

// reallife example

const products = [
  {
    name: 'iphone',
    price: 100,
  },
  {
    name: 'samsumg',
    price: 80,
  },
  {
    name: 'infinix',
    price: 20,
  },
  {
    name: 'redmi',
    price: 50,
  },
];

const totalPriceOfProducts = products.reduce(
  (acc, currVal) => acc + currVal.price,
  0
);

console.log(totalPriceOfProducts);
