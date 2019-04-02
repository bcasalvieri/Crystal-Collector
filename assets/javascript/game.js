// Wrap entire page in document.ready
$(document).ready(function() {

  // Create variables
  var targetNumber;
  var totalScore = 0;
  var wins = 0;
  var losses = 0;
  var numberOptions = [];
  var gameRunning = false;
  var $targetNumber = $("#targetNumber");
  var $totalScore = $("#totalScore");
  var $wins = $("#wins");
  var $losses = $("#losses");
  var $crystals = $("#crystals");
  var $crystalImage = $(".crystalImage");
  var $newGameBtn = $("#newGameBtn");

  // NEW GAME
  function newGame() {
  
    // Turn game on
    gameRunning = true;
    
    // Select a random target number and write to page
    targetNumber = Math.floor(Math.random() * 76) + 25;
    $targetNumber.text(targetNumber);
  
    // Reset numberOptions array
    numberOptions = [];
  
    // Select random number and push to numberOptions array
    for (var i = 0; i < 4; i++) {
      var randomNumber = 1 + (Math.floor(Math.random() * 10));
      numberOptions.push(randomNumber);
    };

    // Empty crystal images
    $crystals.empty();
  
    // Assign crystal values
    for (var i = 0; i < numberOptions.length; i++) {
      var imageCrystal = $("<img>");
      imageCrystal.addClass("crystalImage img-fluid col-3");
      imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);
      $crystals.append(imageCrystal);
    };
  
    // Reset total score
    totalScore = 0;
    $totalScore.text(totalScore);
  
  };
  
  // GAME PLAY
  // Add event listner for user clicking a crystal
  // EVENT LISTNER NOT WORKING!!!!!
  $(document).on("click", ".crystalImage", function() {

    if (!gameRunning) {
      alert(`Click button to start a new game!`);
      return false;
    };

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  
    // Add points to total score, and write to page
    totalScore += crystalValue;
    $totalScore.text(totalScore);
  
    // WIN-LOSE LOGIC
    // If total score === target score, user wins; add 1 to wins and write to page
    if (totalScore === targetNumber) {
      wins++;
      $wins.text(wins);
      gameRunning = false;
    }
    // If total score > target score, user loses; add 1 to losses and write to page
    else if (totalScore > targetNumber) {
      losses++;
      $losses.text(losses);
      gameRunning = false;
    };
    
  });
  
  // Add event listner to new game button to run newGame()
  $newGameBtn.on("click", newGame);

});