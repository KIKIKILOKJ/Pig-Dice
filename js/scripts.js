$(document).ready(function(){
  $(".ficha").click(function(){
  $(".playing").toggle();
    })
});

var throwdice = function () {
  return Math.floor(6*Math.random ()) + 1;
}

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
