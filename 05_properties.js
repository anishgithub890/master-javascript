// const human = {
//   dna: 'ASAD',
//   name: 'Amish',
//   born: Date.now(),
// };

const { rejects } = require('assert');
const { promises } = require('dns');
const { resolve } = require('path');

// console.log(human.born);

// function sayMyname() {
//   let a = {
//     fullname: 'anish m',
//     age: 22,
//   };
//   console.log(a.fullname, a.age);
// }

// sayMyname();

// function greeting(name) {
//   greet = `hi ${name}, nice to meet you`;
//   console.log(greet);
// }

// greeting('Anish');

// normat function

/**
 * async function App() {}
 */

function prMessage1(sms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`this first ${sms}`);
    }, 1000);
  });
}

const App = async () => {
  try {
    let message1 = await prMessage1('sms - 1');
    console.log(message1);
  } catch (error) {
    console.log('promimess failed', error);
  }
};

App();
