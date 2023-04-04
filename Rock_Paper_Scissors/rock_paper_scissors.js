const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_ABBREVIATIONS = VALID_CHOICES.map((choice) => {
  if (choice === 'scissors' || choice === 'spock') {
    return choice.substring(0, 2);
  } else {
    return choice[0];
  }
});
const INFERIOR_TO_ROCK = ['scissors', 'lizard'];
const INFERIOR_TO_PAPER = ['rock', 'spock'];
const INFERIOR_TO_SCISSORS = ['paper', 'lizard'];
const INFERIOR_TO_LIZARD = ['paper', 'spock'];
const INFERIOR_TO_SPOCK = ['rock', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function printBlankLine() {
  prompt('----------------------------------------------------------------');
}

function displayWelcomeMessage() {
  console.clear();
  prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock!');
  prompt('Each game will end when you or the computer has scored 3 points.');
  prompt('Good luck!');
  printBlankLine();
}

function convertedChoice(userInput) {
  switch (userInput) {
    case 'r':
      return 'rock';
    case 'p':
      return 'paper';
    case 'sc':
      return 'scissors';
    case 'l':
      return 'lizard';
    case 'sp':
      return 'spock';
  }
}

function winnerOrLoser(choice1, choice2) {
  if ((choice1 === 'rock' && INFERIOR_TO_ROCK.includes(choice2)) ||
      (choice1 === 'paper' && INFERIOR_TO_PAPER.includes(choice2)) ||
      (choice1 === 'scissors' && INFERIOR_TO_SCISSORS.includes(choice2)) ||
      (choice1 === 'lizard' && INFERIOR_TO_LIZARD.includes(choice2)) ||
      (choice1 === 'spock' && INFERIOR_TO_SPOCK.includes(choice2))) {
    return true;
  }

  return false;
}

function displayScore(userScore, computerScore) {
  printBlankLine();
  prompt('-- CURRENT SCORE --');
  prompt(`User: ${userScore}`);
  prompt(`Computer: ${computerScore}`);
  printBlankLine();
}

function newScore(choice, computerChoice) {
  if (winnerOrLoser(choice, computerChoice)) {
    return 1;
  } else if (winnerOrLoser(computerChoice, choice)) {
    return 0;
  } else {
    return 0;
  }
}

function displayWinner(choice, computerChoice) {
  console.clear();
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (winnerOrLoser(choice, computerChoice)) {
    prompt('You win!');
  } else if (winnerOrLoser(computerChoice, choice)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

function displayGrandWinner(userScore, computerScore) {
  if (userScore === 3) {
    prompt('YOU ARE THE GRAND WINNER!');
  } else if (computerScore === 3) {
    prompt('THE COMPUTER IS THE GRAND WINNER!');
  }
}

while (true) {
  displayWelcomeMessage();

  let computerScore = 0;
  let userScore = 0;

  while (true) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    prompt(`(or type the shortened version: ${VALID_ABBREVIATIONS.join(', ')})`);
    let choice = readline.question().toLowerCase();

    while (!VALID_CHOICES.includes(choice) &&
    !VALID_ABBREVIATIONS.includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question().toLowerCase();
    }

    if (choice.length < 3) {
      choice = convertedChoice(choice);
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    displayWinner(choice, computerChoice);
    userScore += newScore(choice, computerChoice);
    computerScore += newScore(computerChoice, choice);
    displayScore(userScore, computerScore);

    if (userScore === 3 || computerScore === 3) break;
  }

  displayGrandWinner(userScore, computerScore);
  printBlankLine();
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}