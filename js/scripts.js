$(document).ready(function(){
  $(".ficha").click(function(){
  $(".playing").toggle();
    })
});

function throwDice() {
  return Math.floor(6*Math.random ()) + 1;
}
$(document).ready(function() {
$("button#roll1").click(function(){
  roll1 = throwDice();
  $(".player1").text(roll1);
});

$("button#roll2").click(function() {
  roll2 = throwDice();
  $(".player2").text(roll2);
});

function Player (turn) {
  this.roll = 0;
  this.score = 0;
  this.total = 0;
  this.turn =0;
}

Player.prototype.roll1 = function () {
  if (this.roll===1) {
    this.score = 0;
    this.changeturn ();
  }
  else {
    this.score += this.roll
  }
}

Player.prototype.hold = function (){
  this.score += this.score;
  this.total =o;
  this.changeturn ();
}

Player.prototype.changeturn = function (){
  if(this.roll===1) {
    this.turn = false;
  }
  else {
    this.turn = true;
  }
}

Player.prototype.winnerCheck = function () {
  if(this.totalscore>=100) {
    alert(" You are the winner!!");
  }
}

$("button#hold1").click(function(){
  playing.hold1();
  $(".total1").text(player1.total1);
  $(".score1").empty();
  $(".playing").empty();
  player.winnerCheck();
})
});
