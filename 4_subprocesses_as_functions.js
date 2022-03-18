function checkForName(getName) {
  console.log("how can I call you?", getName);
  if (!getName) {
    console.log("Don't be afraid, it's fun and free!");
  }
}
function welcome (){
  console.log("Welcome to Guess the Number Game!! ");
}

function checkIfReadyToStart(takeChance) {
  console.log("Are you ready to take a chance and guess the number, feel like a fortune teller!", takeChance);
  if (!takeChance) {
    console.log("Don't be afraid, it's fun and free!");
  }
}
function chooseNumber1(){
  // take a value from stdin
  return 5;
}
function generateNumber2(){
  //generate random number
  return 6;
}
function comparethem(num1, num2){
  if (num1 == num2) {
    console.log("Woo-hoo, you win!")
  } else {
    console.log("This time you didn't get the number right.");
  }
}

function tryAgain() {
  console.log("");
}


function playGame(getName, takeChance, num1, num2) {
  console.log("start");
  checkForName(getName);
  welcome();
  checkIfReadyToStart(takeChance);
  // let num1 = chooseNumber1();
  // let num2 = generateNumber2();
  comparethem(num1, num2);
  console.log("end");
}

console.log("\n");
console.log("Starting process with get your name and refuse to play and lose");
playGame(true, false, 5, 5);
// console.log("\n");
// console.log("Starting process with don't get your name and play the game and win");
// playGame(false, true, true);
// console.log("\n");
// console.log("Starting process with don't get your name and don't play the game");
// playGame(false, false);
// console.log("\n");
// console.log("Starting process with got your name and play the game and lose");
// playGame(true, true, false);


