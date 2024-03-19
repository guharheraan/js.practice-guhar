let marks = 89;

console.log(marks);

let total = new Number(567.86376);

console.log(total);
console.log(typeof total);

let grandTotal = total.toString(); //converts the number into a string which gives us the acess to use some string's properties on the number such as >>>>
console.log(total.toString().length);
console.log(typeof grandTotal);

console.log(total.toFixed(2)); // rounds to two decimal places

console.log(total.toPrecision(3)); //round the number to ceiling if the values after " ." are greater than 5.

let keywords = 14897897930237;
console.log(keywords.toLocaleString()); // returns a string with commas for every three digits and uses local conventions for formatting numbers
console.log(keywords.toLocaleString('en-IN')); // returns a string with commas for every three digits and uses local conventions for formatting numbers
