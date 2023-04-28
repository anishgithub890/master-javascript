const totalscore = { computerScore: 0, playerScore: 0 };

function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors'];
  const randomChoice = Math.floor(Math.random() * 3);
  return rpsChoice[randomChoice];
}

function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice == computerChoice) {
    score = 0;
    // human won situations
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1;
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1;
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1;
    // smartly computer lose condition apply either doing like win condition
  } else {
    score = -1;
  }
  return score;
}

function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands');
  const playerscoreDiv = document.getElementById('player-score');
  const computerscoreDiv = document.getElementById('computer-score');

  if (score == -1) {
    resultDiv.innerText = 'You Lose';
  } else if (score == 0) {
    resultDiv.innerText = "It's a tie";
  } else {
    resultDiv.innerText = 'You Won';
  }

  handsDiv.innerText = `🤵🏿 : ${playerChoice} vs 🤖: ${computerChoice}`;
  playerscoreDiv.innerText = `Your Score: ${totalscore['playerScore']}`;
  computerscoreDiv.innerText = `Computer Score ${totalscore['computerScore']}`;
  //   resultDiv.innerText = `Robort Score: ${totalscore('computerScore')}`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  totalscore['playerScore'] += score;
  totalscore['computerScore'] -= score;
  showResult(score, computerChoice, playerChoice);
  //   console.log({ playerChoice });
  //   console.log({ computerChoice });
  //   console.log({ score });
  //   console.log(totalscore);
}

function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton');
  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });

  const endGameButton = document.getElementById('endGameButton');
  endGameButton.onclick = () => endGame(totalscore);
}

function endGame(totalscore) {
  totalscore['playerScore'] = 0;
  totalscore['computerScore'] = 0;

  const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands');
  const playerscoreDiv = document.getElementById('player-score');
  const computerscoreDiv = document.getElementById('computer-score');

  resultDiv.innerText = '';
  handsDiv.innerText = '';
  playerscoreDiv.innerText = '';
  computerscoreDiv.innerText = '';
}

playGame();
