// lets create a promise just for understanding purpose

// const promiseOne = new Promise(function (resolve, reject) {
//   //we can do any async task here
//   // or we can call DB , network call etc.

//   // but for understanding let's create a setTimeOut function
//   setTimeout(function () {
//     console.log('async task completed.');
//     resolve(); //this function creates a relation or connection between the
//     //resolve parameter and the "then" function if we dont use it the promise is not complete.
//   }, 1000);
// });

// //when we use the promise we needed then its called the promise consumption.
// promiseOne.then(function () {
//   console.log('promiseOne is resolved');
// });

// // we can create a promise this way also
// //this is just another syntax to create a promise.
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log('async task 2 is running boss!');
//     resolve();
//   }, 2000);
// }).then(function () {
//   console.log('async task 2 completed boss');
// });

// now let's learn how to pass data through the "resolve function" and how can we recieve it
// while consuming the promise

//   ------------------------------------------------------------------------------------------

// now let's understand about the "reject" parameter of the promises.

// imagin we have a promise like this

// const imaginPromise = new Promise(function (resolve, reject) {
//   // let's say we have somthing here

//   setTimeout(function () {
//     let Error = false;
//     if (!Error) {
//       //if there is no error do this
//       console.log('promise is resolved with no errors.');
//       resolve({ username: 'heraan', password: '12345' }); //here we are passing an object with 2 key value pairs.
//     } else {
//       //if there is error do this.
//       reject('promise is rejected due to an error.');
//     }
//   }, 2000);
// });

// // now let's consume this promise.

// // imaginPromise.then(function (name) {
// //   console.log(name.username);
// // }); //if we try to consume it this way it will not works.Even if we store it in a variable it will still not work.

// // to access this data we will used the following method.
// imaginPromise
//   .then(function (name) {
//     // console.log(name);
//     return name.username; //here we only wants to receive the name from the passed data.
//   })
//   .then(function (user) {
//     //this "then()" will receive the values which is returned by the previous "then()".
//     //this is called chaining and we can use unlimited "then()" by chaining it.
//     console.log(user);
//   })
//   .catch(function (error) {
//     //here we will handle the error.
//     console.log(error);
//   }) //sometimes we used this syntax bcz we can't await the promise for too long.
//   //   this we execute weather the promise is resolved or rejects it doesn't matter.
//   .finally(() =>
//     console.log('the promise is either resolved or rejected finally.')
//   );

//   ------------------------------------------------------------------------------------------
//we can write promises and consume it using the "async/await" syntax.

// const languagePromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let Error = true;
//     if (!Error) {
//       //if there is no error do this
//       console.log('promise is resolved with no errors.');
//       resolve({ language: 'javascript', courseCode: '12345' });
//     } else {
//       //if there is error do this.
//       reject('something went wrong with JS.');
//     }
//   }, 2000);
// });

// // now let's consume it through async/await.
// //this method sometimes can't handle the rejection or error part gracefully.
// async function consumeLanguagePromise() {
//   try {
//     const response = await languagePromise;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// //now we will execute this function.
// consumeLanguagePromise();

// --------------------------------------------------------------------------------------

// now let's try an api data through these promises methods.

// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers(); //we accessed the data successfully.

//let's access the same data trough the "then()/Catch()" method.

fetch('https://jsonplaceholder.typicode.com/users') //the fetch function always return a promise so we can use the "then()/Catch()" methods here.
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
