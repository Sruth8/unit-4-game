



var wins = 0;
var score = 0;
var randomNum;
var buttons;

//$("#number-to-guess").text(randomNumber);
// for (var i = 0; i < crystalNumbers.length; i++) {}
//var counter = 0;
//$(".crystal-image").on("click", function () {

//counter += 10;

$(document).ready(function () {

  var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  console.log(randomNumber);

  $("#randNum").html(randomNumber);
  $("#Total").html(wins)


function randomNum() {
  var purple1 = Math.floor(Math.random() * 12) + 1;
  console.log("purple: " + purple1);
  $("#purple1").append(buttons);

}
  


  var blue2 = Math.floor(Math.random() * 12) + 1;
  $("#blue2").html(buttons);


  var green3 = Math.floor(Math.random() * 12) + 1;
  $("#green3").html(buttons);

  var yellow4 = Math.floor(Math.random() * 12) + 1;
  $("#yellow4").html(buttons);



  function reset() {
    randomNumber = Math.floor(Math.random() * 120 - 19) + 19;
    console.log("randomNumber = " + randomNumber);
  
   newScore = 0;
   score = 0;
   $("#randNum").html(randomNumber);
   
   
    
  }
  

  score = 0;
  $("#Total").html(win);



  var purple1 = Math.floor(Math.random() * 12) + 1;
  console.log("purple: " + purple1);
  $("#img1").html("<img src=" + "assets/images/color-magic-crystal-ball.png" + " value=" + purple1 + ">");


  $("img").on("click", function () {
    var newScore = score += parseInt($(this).attr("value"));
    console.log(newScore);
    $("#score").html(score);


    if (score === randomNumber) {
      wins++;
      $("#Total").html(wins);
      console.log("Win: " + wins);
      reset();

    }

    else if (score > randomNum) {
      wins++;
      $("#Total").html("Losse: " + wins);
      console.log("Losse: " + wins);
      reset();

    }


  });



});



//var buttons = $( "<button>" + movies[i] + "</button>")
//$("#movies-view" ).append(buttons)




        //var cImage = $("<img>");

        //cImage.addClass("CrystalImage");

        //cImage.attr("src", "img1" );

        //clImage.attr("data-crystalnumbers", numberOptions[i]);

       // $("#bottons").append(cImage);

   //purple1 = Math.floor(Math.random() * (12 - 1) + 1);
   //blue2 = Math.floor(Math.random() * (12 - 1) + 1);
   //green3 = Math.floor(Math.random() * (12 - 1) + 1);
   //yellow4 = Math.floor(Math.random() * (12 - 1) + 1)
   //finalscore= 0;


//$(".randomNum").html(randomNum);
    //$(".scoreDisplayChild").html(finalscore);


    //});





//player has to guess the answer with numbers
//use four crystals need to be displayed as bottons
//a random number will be shown at the start of the game. use #'s 19-120
//each crystals has a number. use #'s 1-12
//When player cliks the number it adds to the score
//Player score counter is updated.
//The number will hide until clicked.
//Player WINS if their total score matches the random number
//Player LOSsES if number goes past the original numbers
//game restarts Whenever player wins or loses.
//When game restarts, player will see a new number
// the Crystals will also have differant values
//Everything else will reset to ero
// Should show the numbers of wins and loses

