function guessANumber(getName, takeChance, AreNumbersEqual) {
  console.log("start");
  console.log("how can I call you?", getName);
  if (!getName) {
    console.log("Don't be afraid, it's fun and free!");
  }
  console.log("Welcome to Guess the Number Game!! ");
  console.log("Take a chance and guess the number, feel like a fortune teller!", takeChance);
  if (!takeChance) {
    console.log("Don't be afraid, it's fun and free!");
  }
  console.log("Choose the number between 1 and 10");
  console.log("take player1 number");
  console.log("take player2 random number 1-10");
  console.log("Great, now we are comparing the numbers", AreNumbersEqual);
  
  if (!AreNumbersEqual) {
    console.log("This time you didn't get the number right.");
  }
  console.log("Woo-hoo, you win!");
  console.log("Do you want to try again?", takeChance);
  console.log("end");
}

console.log("\n");
console.log("Starting process with get your name and refuse to play and lose");
guessANumber(true, false, false);
console.log("\n");
console.log("Starting process with don't get your name and play the game and win");
guessANumber(false, true, true);
console.log("\n");
console.log("Starting process with don't get your name and don't play the game");
guessANumber(false, false);
console.log("\n");
console.log("Starting process with got your name and play the game and lose");
guessANumber(true, true, false);