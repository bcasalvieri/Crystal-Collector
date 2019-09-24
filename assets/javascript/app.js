let target = 0;
let total = 0;
let wins = 0;
let losses = 0;

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

  const $crystal1 = $("<img>")
    .addClass("crystalImage img-fluid col-3")
    .attr("src", crystal1.img)
    .attr("data-crystalvalue", crystal1.value);
  const $crystal2 = $("<img>")
    .addClass("crystalImage img-fluid col-3")
    .attr("src", crystal2.img)
    .attr("data-crystalvalue", crystal2.value);
  const $crystal3 = $("<img>")
    .addClass("crystalImage img-fluid col-3")
    .attr("src", crystal3.img)
    .attr("data-crystalvalue", crystal3.value);
  const $crystal4 = $("<img>")
    .addClass("crystalImage img-fluid col-3")
    .attr("src", crystal4.img)
    .attr("data-crystalvalue", crystal4.value);

  $("#crystals").append($crystal1, $crystal2, $crystal3, $crystal4);
};

const checkWin = () => {
  if (total === target) {
    wins++;
    $("#wins").text(wins);
  } else if (total > target) {
    losses++;
    $("#losses").text(losses);
  }
  return false;
};

const newGame = () => {
  gameRunning = true;

  target = getRandomNumber(25, 100);
  $("#targetNumber").text(target);

  total = 0;
  $("#totalScore").text(total);

  createCrystals();
};

$(document).ready(newGame);

$(document).on("click", $(".crystalImage"), () => {
  console.log($(this).attr("data-crystalvalue"));

  total += crystalValue;
  $("#totalScore").text(total);

  checkWin();
});

$("#newGameBtn").on("click", newGame);
