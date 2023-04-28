// Array and Object

// const howManyletters = (sentence) => {
//   for (letter in sentence) {
//     console.log(letter);
//   }
// };

// howManyletters('how many letters do i have');

// const howManyLetters = () => {
//   const phrase = 'hey, what is your name';
//   for (letter in phrase) {
//     console.log(letter);
//   }
// };

// howManyLetters();

// if (for of ) type we get text and if type (for in) then we get inndex

// for in

// const howManyLetters = () => {
//   const phrase = 'hey, what is your name';
//   for (const letter in phrase) {
//     console.log(letter);
//   }
// };

// howManyLetters();

// const howManyLetters = () => {
//   const phrase = 'hey, what is your name';
//   for (const letter of phrase) {
//     console.log(letter);
//   }
// };

// howManyLetters();

// const howManyLetters = () => {
//   let result = 0;
//   for (const index in phrase) {
//     console.log(Number(index) + 1);
//     result = Number(index) + 1;
//   }
//   return { result };
// };

// const phrase = prompt('Write your name');

// console.log(howManyLetters(phrase));

// other way to express

// const howManyLetters = (phrase) => {
//   // let result = 0;
//   for (const index in phrase) {
//     // console.log(Number(index) + 1);
//     // result = Number(index) + 1;
//   }
//   return { result: phrase.length };
// };

// const phrase = prompt('Write your name');

// console.log(howManyLetters(phrase));

// to create array add whole array in a result using for loop hint (for of)

// const sunArray = (numbers) => {
//   let result = 0;
//   for (const number of numbers) {
//     console.log(number);
//     result = result + number;
//   }
//   return { result };
// };

// const nums = [1, 2, 3, 4, 5];

// console.log(sunArray(nums));

// return max array number

const max = (numbers) => {
  let result = numbers[0];
  for (const number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return { result };
};

const nums = [1, 2, 3, 4, 5, 66, 7];
// nums.push(99);
console.log(max(nums));
