// Variables
var targetNumber;
var totalScore;
var numberOptions = [10, 7, 5, 3];



// NEW GAME
function newGame() {
  
  // 1. Select a random target number and write to page
  targetNumber = 1 + (Math.floor(Math.random() * 100));
  $("#targetNumber").text(targetNumber);

  // 2. Randomly assign gem values
  

  // 3. Reset total score
  totalScore = 0;
  $("#totalScore").text(totalScore);

}

// GAME PLAY
// User clicks on a crystal 
$(".crystal-image").on("click", function() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  // Add points to total score, and write to page
  totalScore += crystalValue;
  $("#totalScore").text(totalScore);

  // WIN-LOSE LOGIC
  // If total score === target score, user wins; add 1 to wins and write to page
  if (totalScore === targetNumber) {
    wins++;
    $("#wins").text(wins);
  }
  // If total score > target score, user loses; add 1 to losses and write to page
  else if (totalScore > targetNumber) {
    losses++;
    $("#losses").text(losses);
  }

});