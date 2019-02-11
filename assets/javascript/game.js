

//$("#number-to-guess").text(randomNumber);
// for (var i = 0; i < crystalNumbers.length; i++) {}
//var counter = 0;
//$(".crystal-image").on("click", function () {

    //counter += 10;

  $(document).ready(function(){
    var randomNumber = Math.floor(Math.random() *(120 - 19 + 1)) + 19;
    console.log(randomNumber);
  
$(".block2").html(randomNumber);



});

        

       
       
       
       
        //var cImage = $("<img>");

        //cImage.addClass("CrystalImage");

        //cImage.attr("src", "img1" );

        //clImage.attr("data-crystalnumbers", numberOptions[i]);

       // $("#bottons").append(cImage);
    

    //});

        
    

    
      





























































//player has to guess the answer with numbers
//use four crystals need to be displayed as bottons
//a random number will be shown at the start of the game. use #'s 19-120
//each crystals has a number. use #'s 1-12
//When player cliks the number it adds to the score
//Player score counter is updated.
//The number will hide until clicked.
//Player WINS if their total score matches the random number
//Player LOSES if number goes past the original numbers
//game restarts Whenever player wins or loses.
//When gane restarts, player will see a new number
// the Crystals will also have differant values
//Everythink else will reset to ero
// Should show the numbers of wins and loses.