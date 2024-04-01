//imeadiately invoked function expresions (IIFE)

//we used to define function in the old traditional way ----------BUT---------
//what if we need to run a function imediately  after its definition?
//that's where IIFE comes into play.

// function std() {
//   console.log(`its a,traditional function`);
// }
// //this the traditional method of defining a function.
// std();

// --------------------------- let's try IIFE now --------------------------------

(function run() {
  console.log(`this is an IIFE function`);
})(); //now its an IIFE function  and it runs immediately! we will wrap the function body in "()"
//and then  call it with "()" at the end. This makes it execute as soon as possible.

// --- note -- to write two IIFE function in a single file make sure that each IIFE function has the ";" at the end.

// let's try arrow IIFE function

(() => {
  console.log(`this is an arrow IIFE function`);
})();

//we can pass arguments to these function and it can accept it as a normal function.

((name) => {
  console.log(`this is an arrow IIFE function ${name}`);
})('John');

(function run(something) {
  console.log(`this is an IIFE function ${something}`);
})('buddhuuuuuu');
