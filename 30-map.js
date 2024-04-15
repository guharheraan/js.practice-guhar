// let's see how we can use the map method
// unlike the filter method the map method returns what ever exists in the scoop.
// the map method also accepts the callback function like filter and forEach.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNumbers = numbers.map((num) => num * 2);

// console.log(newNumbers);
// it works just like the filter and is most useful method in real world applications.

// we can apply multiple maps and filters in a single query which is called chaining.

const multipleMaps = numbers
  .map((n) => n * 2) // first chain will multiply each number with 2.
  .map((n) => n - 1) //second chain will  subtract 1 from each result of previous chain.
  .filter((n) => n >= 10); //third chain  will filter out all the values that are less than or equal to 10.

// console.log(multipleMaps);

// so this is how we can use the map method.
