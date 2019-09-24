let target = 0;
let total = 0;
let wins = 0;
let losses = 0;
let isGameRunning = false;

class Crystal {
  constructor(id, value) {
    this.id = id;
    this.value = value;
    this.img =
      "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg";
  }
}

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createCrystals = () => {
  $("#crystals").empty();

  const crystal1 = new Crystal(1, getRandomNumber(1, 10));
  const crystal2 = new Crystal(2, getRandomNumber(1, 10));
  const crystal3 = new Crystal(3, getRandomNumber(1, 10));
  const crystal4 = new Crystal(4, getRandomNumber(1, 10));

  const crystalsArr = [];
  crystalsArr.push(crystal1, crystal2, crystal3, crystal4);

  const $crystalsDiv = $("#crystals");

  crystalsArr.forEach(c => {
    const $c = $("<img>")
    .addClass("crystalImage img-fluid col-3")
    .attr("src", c.img)
    .attr("data-crystalvalue", c.value)
    .appendTo($crystalsDiv);
  })
};

const newGame = () => {
  isGameRunning = true;

  target = getRandomNumber(25, 100);
  $("#targetNumber").text(target);

  total = 0;
  $("#totalScore").text(total);

  createCrystals();
};

const checkWin = () => {
  if (total === target) {
    wins++;
    $("#wins").text(wins);
    isGameRunning = false;
  } else if (total > target) {
    losses++;
    $("#losses").text(losses);
    isGameRunning = false;
  }
};

$(document).ready(newGame);

$(document).on("click", ".crystalImage", function() {
  if (!isGameRunning) {
    return false;
  }

  const crystalValue = parseInt($(this).attr("data-crystalvalue"));

  total += crystalValue;
  $("#totalScore").text(total);

  checkWin();
});

$("#newGameBtn").on("click", newGame);
