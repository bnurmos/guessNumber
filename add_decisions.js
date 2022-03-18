let getName = false;
let takeChance = false;
let AreNumbersEqual = false;

console.log("start");
console.log("how can I call you?", getName);
// console.log("Don't be shy, introduce yourself");

if (!getName) {
  console.log("Don't be afraid, it's fun and free!");
}
console.log("Welcome to Guess the Number Game!! ");
console.log("Take a chance and guess the number, feel like a fortune teller!", takeChance);

if (!takeChance) {
  console.log("Don't be afraid, it's fun and free!");
}
console.log("Choose the number between 1 and 10");
console.log("player1 number");
console.log("player2 random number 1-10");
console.log("Great, now we are comparing the numbers", AreNumbersEqual);

if (!AreNumbersEqual) {
  console.log("This time you didn't get the number right.");
}
console.log("Woo-hoo, you win!");
console.log("Do you want to try again?", takeChance);
console.log("end");

