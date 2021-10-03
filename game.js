
var buttonColors = ["red", "blue", "green", "yellow"];
var isStarted = false;

var level = 1;

var clickedButtons = [];
var buttonsToClick = [];

function nextSequence() {
  let number = Math.floor(Math.random() * 4);
  let nextButton = buttonColors[number];
  buttonsToClick.push(nextButton);
  clickTheButtonShadow(nextButton);
  console.log("buttonsToClick: " + buttonsToClick);
}


$(".btn").click(function(event) {
  let id = event.target.id
  clickTheButton(id)
  clickedButtons.push(id);
  console.log("clickedButtons: " + clickedButtons);
  checkTheAnswer(clickedButtons.length - 1);
})


function clickTheButton(id) {
  var audio = new Audio("sounds/" + id + ".mp3");
  audio.play();
  $("#" + id).fadeOut(100).fadeIn(100);
}

function clickTheButtonShadow(id) {
  var audio = new Audio("sounds/" + id + ".mp3");
  audio.play();

  $("#" + id).addClass("pressed");
  setTimeout(function() {
  $("#" + id).removeClass("pressed");
  }, 100);
}

  function clickTheButton(id) {
    var audio = new Audio("sounds/" + id + ".mp3");
    audio.play();
    $("#" + id).fadeOut(100).fadeIn(100);
  }




function checkTheAnswer(index) {
  if (clickedButtons[index] !== buttonsToClick[index]) {
   gameOver();
 } else if (clickedButtons.length === buttonsToClick.length) {
   setTimeout(function() {
   nextLevel();
 }, 500);
 }
}


function nextLevel() {
  level ++;
  $("h1").text("Level " + level);
  nextSequence();
  clickedButtons = [];
}


function gameOver() {
  $("body").addClass("game-over");
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();

  setTimeout(function() {
  $("body").removeClass("game-over");
  $("h1").text("Game Over ! " + "you reached level " + level + ", Press Any Key to Restart");
  isStarted = false;
  level = 1
  clickedButtons = [];
  buttonsToClick = [];
}, 100);
}




$(document).keypress(function() {
  if (isStarted === false) {
    $("h1").text("Level " + level);
    nextSequence()
    isStarted = true;
  }
})
