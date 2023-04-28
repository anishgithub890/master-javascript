// console.log('Good Morning');

// setTimeout(() => {
//   console.log('Hello Nepal');
// }, 3000);

// console.log('Good Evening');

// javascript doesn't stop for perticular line of code if this takes time automatically switch next function or whatever we defined

// Call back and Promises

/**
 * fs for
 * Read files, Create files, Update files, Delete files and Rename files
 */

// let fs = require('fs');

// basically callback first argument must be error and promise or data
// if we want to see data on file.txt then "utf-8"

// fs.readFile('file.txt', 'utf-8', (error, data) => {
//   console.log(error, data);
// });

let fs = require('fs/promises');

// let a = fs.readFile('file.txt', 'utf-8');
// a.then((data) => {
//   console.log(data);
// });

// console.log('hello world!!');

const readThree = async (file1, file2, file3) => {
  let a1 = fs.readFile(file1, 'utf-8');
  let a2 = fs.readFile(file2, 'utf-8');
  let a3 = fs.readFile(file3, 'utf-8');

  let c1 = await a1;
  console.log(c1);
  let c2 = await a2;
  console.log(c2);
  let c3 = await a3;
  console.log(c3);
};

console.log('This is end of first');

readThree('file1.txt', 'file2.txt', 'file3.txt');
