//the user interface logic
$(document).ready(function() {
  $("button#startGame").submit(function(event){
    event.preventDefault()

    player1 = new Player(true);
    player2 = new Player(false);
    $(".entry-page").show();
    $(".game-page").hide();


    var playerOne = $("input#player1").val();
    $("#playerOneName").text(playerOne);
    var playerTwo = $("input#player2").val();
    $("#playerTwoName").text(playerTwo);



  });
});

//business logic
