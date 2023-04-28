const randomArrayNumber = (numbers) => {
  const randomNum = Math.floor(Math.random() * numbers.length);
  console.log(randomNum);
  return numbers[randomNum];
};

const numbers = [1, 2, 3, 4, 5, 6];
console.log(randomArrayNumber(numbers));
