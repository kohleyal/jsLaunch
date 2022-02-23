/*
ask user for their move
have computer play its move. random option
display who won
*/

const readline = require('readline-sync');
const VALID_CHOCIES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let playerScore = 0;
let computerScore = 0;
const choiceOutcomes = {
  rock: {
    rock: false, paper: false, scissors: true, lizard: true, spock: false
  },
  paper: {
    rock: true, paper: false, scissors: false, lizard: false, spock: true
  },
  scissors: {
    rock: false, paper: true, scissors: false, lizard: true, spock: false
  },
  lizard: {
    rock: false, paper: true, scissors: false, lizard: false, spock: true
  },
  spock: {
    rock: true, paper: false, scissors: true, lizard: false, spock: false
  }};

const checkEntree = entree => {
  return VALID_CHOCIES.find(word => word.startsWith(entree));
};

const prompt = msg => console.log(`=> ${msg}`);
const incrementPlayer = _ => {
  playerScore += 1;
};
const incrementComputerScore = _ => {
  computerScore += 1;
};

const resetScores = _ => {
  playerScore = 0;
  computerScore = 0;
};

const showScoreBoard = _ => {
  prompt(`The current score is: player ${playerScore} - computer ${computerScore}\n`);
  if (playerScore === 3) {
    prompt('You are the Grand Winner!');
    resetScores();
  } else if (computerScore === 3) {
    prompt('The computer is the Grand Winner!');
    resetScores();
  }
};


prompt('First to three is the Grand Winner!');
while (true) {
  prompt(`Choose one: ${VALID_CHOCIES.join(', ')}`);
  let choice = readline.question().toLowerCase();
  choice = checkEntree(choice);

  while (!choice) {
    prompt("That's not a valid choice");
    choice = readline.question().toLowerCase();
    choice = checkEntree(choice);
  }

  let randomIndex = Math.floor((Math.random() * VALID_CHOCIES.length));
  let computerChoice = VALID_CHOCIES[randomIndex];

  prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

  if (choiceOutcomes[choice][computerChoice]) {
    prompt('You Win!');
    incrementPlayer();
  } else if (choiceOutcomes[computerChoice][choice]) {
    prompt('Computer Won!');
    incrementComputerScore();
  } else {
    prompt('It was a tie.');
  }
  showScoreBoard();
  prompt('Would you like to play again? (y/n)');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }
  if ('no'.startsWith(answer)) break;
}
