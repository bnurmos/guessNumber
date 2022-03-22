const gameState = {
  score: 0,
  name: "",
};

// const readlineSync = require("readline-sync");

// function checkForName() {
//   let asd = readlineSync.question('PLAYER 1: How can I call you? ');

//   if (!asd) {
//     console.log("Don't be afraid, it's fun and free!");
//     asd = readlineSync.question('PLAYER 1: How can I call you? ');

//   } 
//   console.log(asd + ', welcome to Guess the Number Game!');
//   return asd;
// };

// function checkIfReadyToStart() {
//   let takeChance = readlineSync.question("Are you ready to take a chance and guess the number, feel like a fortune teller! (Y-yes/N-no)");
//   if (takeChance== "N" || takeChance == "n" || takeChance == "") {
//     console.log("Don't be afraid, it's fun and free!");
//     takeChance = readlineSync.question("Are you ready to take a chance and guess the number, feel like a fortune teller! (Y-yes/N-no)");
//   } else {
//     return
//   }
// }
// function chooseNumber1(name) {
//   let num1 = readlineSync.question(name + ', choose the number between 1 and 10:: ');
//   console.log(num1);
//   return num1;

// }
const start = () => {
  return "Welcome to the game, please enter your name: curl http://localhost:5000/chooseName?name={yourName}"
};

const enterName = (name) => {
  gameState.name = name;
  return `Hello ${name}, to continue please choose a number between 1 and 10, curl http://localhost:5000/chooseNumber?num1={number}`

};
const chooseNumber1 = (num1) => {
  return `Your number is ${num1}, to continue please go to curl http://localhost:5000/chooseNumber2`
};
// const generateNumber1 = () => {
//   let num1 = 
//   let returnMessage = `your number is ${num1}`;
//   return returnMessage;
// };

const generateNumber2 = () => {
  let num2 = Math.floor(Math.random() * 10);
  console.log(num2);
  let returnMessage = `Generated number is ${num2}, to continue please go to curl http://localhost:5000/compareNumbers`;
  //return num2;
  return returnMessage;
}
function compareNumbers(num1, num2) {
  if (num1 !== num2) {
    // console.log("Woo-hoo, you win!")
    gameState.score = gameState.score + 1;
    return ("Woo-hoo, you win! " +
    gameState.name +
    ". To play again curl http://localhost:5000/startGame")
  } else {
    //console.log("This time you didn't get the number right.");
    return (
      "This time you didn't get the number right " +
      gameState.name +
      ". To play again curl http://localhost:5000/startGame"
    );
  }
}

// function tryAgain() {
//   chooseNumber1();
//   generateNumber2();
//   compareNumbers();
// }


// function playGame() {
//   console.log("start");
//   // let getName=checkForName();
//   checkIfReadyToStart();
//   // chooseNumber1()
//   // chooseNumber2()
//   let num1 = chooseNumber1(getName);
//   let num2 = generateNumber2();
//   compareNumbers(num1, num2);
//   tryAgain()
//   console.log("end");
// }

// console.log("\n");
// console.log("Starting process with get your name and refuse to play and lose");
// playGame(true, false, 5, 5);
// console.log("\n");
// console.log("Starting process with don't get your name and play the game and win");
// playGame(false, true, true);
// console.log("\n");
// console.log("Starting process with don't get your name and don't play the game");
// playGame(false, false);
// console.log("\n");
// console.log("Starting process with got your name and play the game and lose");
// playGame(true, true, false);


module.exports = { start, enterName, chooseNumber1, generateNumber2, compareNumbers, gameState}; 