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
  this.total += this.score;
  this.score =o;
  this.changeturn ();
  return this.total;
}

$(document).ready(function(){
$("button#hold1").click(function(){
  $(".score1").text(player1.hold())
  alert("Next Player")

})

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

});
})
