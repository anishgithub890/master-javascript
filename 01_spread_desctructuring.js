// spread operator and destructing
//note with the help spread we can open array contain

arr = [1, 2, 4, 5];

function avg(a, b, c) {
  return a + b + c / 3;
}

// let a = avg(...arr);

// let a = [4, 7, ...arr, 55];

// array copying

// let a = [...arr];

// array concatenated

// let a2 = [7, 8, 9];
// let a = [...a2, ...arr];

// how we can use array with object

let obj1 = {
  firstname: 'Anish',
  class1: 'C7',
  favLang: 'Javascript',
};

// old wway to use array on obj

// obj2.firstname = obj1.firstname;
// obj2.class = obj1.class;
// obj2.favLang = 'Python';

// array with spread

// let obj2 = { ...obj1, favLang: 'JAVA' };

// for destructuring

// let firstname = obj1.firstname;
// let class1 = obj1.class1;
// let favLang = obj1.favLang;

let { firstname, class1, favLang } = obj1; // Destructuring

console.log(firstname, class1, favLang);
