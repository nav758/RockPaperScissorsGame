const rules = document.querySelector(".rules");
const rulesButton = document.querySelector(".btn-rules");
const closeButton = document.querySelector(".close");
const contest = document.querySelector(".result");
const next = document.querySelector(".next");
contest.style.display = "none";



var SCORE = Number(localStorage.getItem("SCORE"));
document.querySelector(".score-card-1 h1").innerText = SCORE;
var SCORE1 = Number(localStorage.getItem("SCORE1"));
document.querySelector(".score-card h1").innerText = SCORE1;
const Options = {
  rock: "img/Group 7.png",
  paper: "img/Group 6.png",
  scissor: "img/Group 5.png",
};
function handleRuleMenuClick() {
  rules.classList.toggle("open");
}

rulesButton.addEventListener("click", handleRuleMenuClick);
closeButton.addEventListener("click", handleRuleMenuClick);

const pickchoice = (hand) => {
  let game = document.querySelector(".game");
  game.style.display = "none";
  let contest = document.querySelector(".result");
  contest.style.display = "flex";
  console.log(hand);
  console.log(Options[hand]);
  console.log(document.getElementById("pickedimg"));
  document.getElementById("pickedimg").src = Options[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
  let game = ["rock", "paper", "scissor"];
  let cpHand = game[Math.floor(Math.random() * 3)];

  document.getElementById("PcPickImage").src = Options[cpHand];

  result(hand, cpHand);
};

const restartGame = () => {
  let contest = document.querySelector(".result");
  contest.style.display = "none";

  let game = document.querySelector(".game");
  game.style.display = "grid";
};

const result = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissor") {
    setDecision("YOU LOSE");
    localStorage.setItem("SCORE1", ++SCORE1);
    setScore1(localStorage.getItem("SCORE1"));
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN");
    localStorage.setItem("SCORE", ++SCORE);
    setScore(localStorage.getItem("SCORE"));
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie");
    next.style.display = "none";
  }
  if (userHand == "rock" && cpHand == "scissor") {
    setDecision("YOU WIN");
    localStorage.setItem("SCORE", ++SCORE);
    setScore(localStorage.getItem("SCORE"));
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE");
    localStorage.setItem("SCORE1", ++SCORE1);
    setScore1(localStorage.getItem("SCORE1"));
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie");
    next.style.display = "none";
  }
  if (userHand == "scissor" && cpHand == "scissor") {
    setDecision("It's a tie");
    next.style.display = "none";
  }
  if (userHand == "scissor" && cpHand == "rock") {
    setDecision("YOU LOSE");
    localStorage.setItem("SCORE1", ++SCORE1);
    setScore1(localStorage.getItem("SCORE1"));
  }
  if (userHand == "scissor" && cpHand == "paper") {
    setDecision("YOU WIN");
    localStorage.setItem("SCORE", ++SCORE);
    setScore(localStorage.getItem("SCORE"));
  }
};

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};

const setScore1 = (newScore) => {
  document.querySelector(".score-card h1").innerText = newScore;
  next.style.display = "none";
};

const setScore = (newScore1) => {
  console.log(newScore1);
  document.querySelector(".score-card-1 h1").innerText = newScore1;
  next.style.display = "block";
};
localStorage.setItem("SCORE", SCORE);
localStorage.setItem("SCORE1", SCORE1);