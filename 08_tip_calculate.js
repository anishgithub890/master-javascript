const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  // for billTotal
  const bill = Number(billInput.value);

  // for tipPercentage
  const tipPercentage = Number(tipInput.value) / 100;
  //  for tipPercentage to tip total amount
  const tipAmount = bill * tipPercentage;
  // console.log({ tipAmount });

  const total = tipAmount + bill;
  // console.log({ total });

  const perPersonTotal = total / numberOfPeople;
  // console.log({ perPersonTotal });

  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
  // for real word stuff
  // perPersonTotalDiv.innerText = `$${perPersonTotal.toLocaleString('en-US')}`;
};

const increasePeople = () => {
  numberOfPeople += 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
};

// or use guard clause

// const decreasePeople = () => {
//   if (numberOfPeople <= 1) {
//     console.log(numberOfPeople, 'sorry at least one people have to pay');
//     return;
//   }

//   numberOfPeople -= 1;
//   numberOfPeopleDiv.innerText = numberOfPeople;
//   calculateBill();
// };

const decreasePeople = () => {
  if (numberOfPeople > 1) {
    numberOfPeople -= 1;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
  } else {
    console.log(numberOfPeople, 'sorry at least one people have to pay');
  }
};
