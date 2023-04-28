// Object in Javascript

// const property = 'firstname';
// const name = 'anish mahato';

// const user = {
//   [property]: name,
// };

// console.log(user.firstname);

// looping through obj

// const user = {
//   name: 'anish mahato',
//   age: 22,
//   isTotallyAwesome: true,
// };

// for (key in user) {
//   // console.log({ key });
//   // key value
//   console.log(user[key]);
// }

// delete keyword

// in that situation delete key not gonna affect
// const func = (function (a) {
//   delete a;
//   return a;
// })(5);

// console.log(func);

// const user = {
//   name: 'anish mahato',
//   age: 22,
//   'l like programming': true,
// how do we access that key
// };
// for (key in user) {
//   console.log(user.name);
// }

// delete properties

// delete user['l like programming'];
// delete user.age;

// for (key in user) {
//   console.log(user['l like programming']);
// }

// const obj = {
//   a: 50,
//   b: 34,
//   a: 32,
// if same have same obj second key will replaced first key
// };

// console.log(obj);

// let nums = [1, 2];

// let multiplyBytwo = nums.map((num) => num * 2);
// console.log(multiplyBytwo);

// // number multiply by 2
// multiplyBytwo(nums);

// function multiplyBytwo(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// console.log(nums);

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// const b = { key: 'b' }; => bject Object because key: 'b'  not string format first pass a[b] then overlapped with a[c]

// console.log(a[b]);
// console.log(a);

// Q&N What's JSON.strigify and JSON.parse ? ans 👉 for store in localstorage
const user = {
  name: 'Anish Mahato',
  age: 22,
};

// console.log(user);
// user console as an object
const strObj = JSON.stringify(user);
localStorage.setItem('test', strObj);
// console.log(JSON.parse(strObj));
console.log(JSON.parse(localStorage.getItem('test')));
// JSON.stringify for print as a string format
