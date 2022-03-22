const express = require("express");
const { start, enterName, chooseNumber1, generateNumber2, compareNumbers, gameState } = require("./guessNumber");
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
  let num1 = req.query.num1;
  let answer = chooseNumber1(num1);
  res.send(answer);
});

app.get("/chooseNumber2", (req, res) => {
  let num2 = req.query.num2;
  let answer = generateNumber2(num2);
  res.send(answer);
});


app.get("/compareNumbers", (req, res) => {
  //let number = req.query.number;
  let answer = compareNumbers();
  res.send(answer);
});


app.get("/score", (req, res) => {
    let score = gameState.score;
    let name = gameState.name;
    res.send(`${name} your score is: ${score}`);
  });
  
  app.listen(5000, () => console.log("listening on 5000"));