// higher order functions
// map
// filter
// reduce

// Javascript Map simlarly we can show server data with map
let a = [1, 2, 3, 4, 5];

// let a2 = a.map((value) => {
//   return value + 4;
// });

// console.log(a2);

// Javascript Fiilter

let f1 = [1, 3, 4, 6, 7, 8];

let f2 = f1.filter((value) => {
  return value > 6;
});

// console.log(f2);

// Javascript Reduce

let R1 = a.reduce((val1, val2) => {
  return val1 + val2;
});

console.log(R1);

const filterFunction = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const xyz = numbers.filter((number) => {
    if (number > 4 == false && number < 2 == false) {
      return number;
    }
  });
  console.log(xyz);
};

filterFunction();

// ----------------

// const actors = [
//   {
//     name: 'Rock',
//     netWorth: 3000000,
//   },
//   {
//     name: 'Johnyy',
//     netWorth: 2000000,
//   },
//   {
//     name: 'Abmer',
//     netWorth: 10,
//   },
// ];

// console.log(
//   actors.filter((actor) => {
//     return actor.netWorth > 10;
//   })
// );

// const actors = [
//   {
//     name: 'Rock',
//     netWorth: 3000000,
//   },
//   {
//     name: 'Johnyy',
//     netWorth: 2000000,
//   },
//   {
//     name: 'Abmer',
//     netWorth: 10,
//   },
// ];

// // using reduce for sumnetworth

// let result = actors.reduce((prev, curr) => prev + curr.netWorth, 0);
// console.log(result);
