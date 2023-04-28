// let groceries = ['🍌', '🍎', '🍐'];
// groceries.push('🥑');
// add more groceries
// let groceries1 = ['🥭', '🥑'];

// let obj = [...groceries, ...groceries1];

// console.log(obj[4]);

// console.log(groceries.length);

// const introducer = (name, shirt) => {
//   const person = {
//     name: name,
//     tshirt: shirt,
//     assets: 1000000,
//     liabilities: 30000,
//   };

//   const intro = `Hi my name is ${person.name} and today's tshirt is ${
//     person.tshirt
//   } and my net worth is $${person.assets - person.liabilities}`;

//   return intro;
// };

// console.log(introducer('anish mahato', 'red'));

// const groceries = [
//   '🍌',
//   '🍎',
//   '🍐',
//   '🍎',
//   '🍐',
//   '🍎',
//   '🍐',
//   '🍎',
//   '🍐',
//   '🍎',
//   '🍐',
//   '🍎',
//   '🍐',
//   '🍎',
//   '🍐',
// ];

// for (let i = 0; i < groceries.length; i++) {
//   console.log(groceries[4]);
// }

// for (const grocery of groceries) {
//   console.log(grocery);
// }

// print 0 to 9

// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// const number = [1, 2, 3, 4, 5, 6];

// try to arithmatic with using for loop

// let ADD = number.map((value) => {
//   return value + 2;
// });

// console.log(ADD);

// for (i = 0; i < number.length; i++) {
//   console.log(number[i]);
// }

// for (const num of number) {
//   console.log(num / 2);
// }

// const number = [1, 2, 3, 4, 5, 6];

// let result = [];

// for (const num of number) {
//   result.push(num * 2);
// }

// console.log(result);

// Real World stuff for loop

// const double = (numbers) => {
//   let result = [];
//   for (const number of numbers) {
//     result.push(number * 2);
//   }
//   return result;
// };

// console.log(double([1, 2, 3, 4]));

// letter frequency
// create object apply for loop count value of letter of frequency if value reapeted then increment by one other default one
// incremental operators
// ++, +=, --

const letterFrequency = (phrase) => {
  console.log(phrase);
  let frequency = {};
  for (const letter of phrase) {
    if (letter in frequency) {
      frequency[letter] = frequency[letter] + 1;
      // or
      // frequency[letter] += 1;
      // or
      // frequency[letter]++;
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
};

// console.log(letterFrequency('haha'));

// word frequency

const wordsFrequency = (phrase) => {
  const words = phrase.split(' ');
  return letterFrequency(words);
};

console.log(wordsFrequency('what a joke haha haha'));
