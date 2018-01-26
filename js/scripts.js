//business logic
var player1="";
var player2="";

// we need to add a fuction to throw the dice

function Player(turn) {
  // this.turn = turn;
  this.playerName;
}


//the user interface logic
$(document).ready(function() {
  $("button#start").click(function(event){
    //Constructor
    player1 = new Player(true);
    player2 = new Player(false);
    $(".player-console").show();
    $(".start-menu").hide();
    //Variable that hold name number 1
    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);
    //Variable that hold name number 2
    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName = player1Name;
    player2.playerName = player2Name;

  });
//shows the result for the Player 1.
  $("button#player1-roll").click(function(event){
    player1.roll = throwdice();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("totalScore#round-total-1").text(player1.tempscore);
  });


  // Shows the result for the Prayer 2.
  $("button#player2-roll").click(function(event){
    player2.roll = throwdice();
    $("#die-roll-2").text(player2.roll);
    player2.rollone();
    $("totalScore#round-total-2").text(player2.tempscore);
  });


});
