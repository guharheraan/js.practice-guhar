//forEach loop is most useful in javascript
// forEach loop accepts a callback function

const languages = ['c++', 'python', 'java', 'ruby', 'javascript', 'c#'];

// the function in forEach loop will need a parameter and that parameter can be any thing
// which is same as we were defining the name of the iterator in forOf or forIn loop.
// the function should not have name it should an arrow function or  anonymous function.
languages.forEach((key) => {
  //   console.log(key);
});

// we can pass a function to the  callback function inside forEach loop

function printLanguage(language) {
  console.log(`${language} is my favourite language`);
}

// languages.forEach(printLanguage);

// the forEach not only have the access of the item of the  array but also has the index of the item and also the whole array.

// we have a scenario in real life in which we have to access items of object and these objects exist within an array.

const langs = [
  {
    languageName: 'javascript',
    fileExtension: 'js',
  },
  {
    languageName: 'python',
    fileExtension: 'py',
  },
  {
    languageName: 'c++',
    fileExtension: 'cpp',
  },
];

// to access all of the objects in the array
// langs.forEach((item) => {
//   console.log(item);
// });

// now we will access the data within the objects  using dot notation (.)

langs.forEach((item) => {
  console.log(
    `The ${item.languageName} uses the extension .${item.fileExtension}`
  );
});

// langs.forEach((item) => {
//   console.log(item.fileExtension);
// });
