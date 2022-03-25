const express = require("express");
const { start, enterName, chooseNumber1, generateNumber2, compareNumbers, gameState } = require("./guessNumber");
const Path = require('path');
const app = express();

app.get("/startGame", (req, res) => {
  let startMsg = start()
  res.send(startMsg);
});


app.get("/chooseName", (req, res) => {
  let name = req.query.name;
  let responseMsg = enterName(name);

  res.send(responseMsg);
});

app.get("/chooseNumber", (req, res) => {
  const num1 = Number.parseInt(req.query.num1);
  if(isNaN(num1)){
    res.status(400).send('Please provide num1 parameter with a number value');
    return;
  }
  const answer = chooseNumber1(num1);
  res.send(answer);
});

app.get("/chooseNumber2", (req, res) => {
  //let num2 = req.query.num2;
  let answer = generateNumber2();
  res.send(answer);
});


app.get("/compareNumbers", (req, res) => {
  let answer = compareNumbers();
  res.send(answer);
});


app.get("/score", (req, res) => {
  let score = gameState.score;
  let name = gameState.name;
  res.send(` ${name} your score is: ${score}`);
});

app.get("/error", function (req, res) {
  res.status(500).send("Server error");
});

app.use(function (req, res, next) {
  //res.status(404).send("Sorry can't find that!");
  res.status(404).sendFile(Path.resolve(__dirname, '404.jpg'));
});

app.listen(5000, () => console.log("listening on 5000"));