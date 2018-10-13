//to begin with, set the crystal images as items that can be clicked on & run a function

$( document ).ready(function(){
var randomNumber = Math.floor(Math.random()*(120-19))+19;
var numberOne = Math.floor(Math.random()*(12-1))+1;
var numberTwo = Math.floor(Math.random()*(12-1))+1;
var numberThree = Math.floor(Math.random()*(12-1))+1;
var numberFour = Math.floor(Math.random()*(12-1))+1;
var counter = 0;
var wins = 0;
var losses = 0;

$("#randomNumber").html(randomNumber);
$("#one").attr("data-value", numberOne);
$("#two").attr("data-value", numberTwo);
$("#three").attr("data-value", numberThree);
$("#four").attr("data-value", numberFour);
$("#numberWins").attr("data-value", wins);
$("#numberLosses").attr("data-value", losses);
//resets the game
function reset(){
    randomNumber = Math.floor(Math.random()*(120-19))+19;
    $("#randomNumber").html(randomNumber);
    counter = 0;
    $("#finalTotal").text(counter)
    numberOne = Math.floor(Math.random()*(12-1))+1;
    $("#one").attr("data-value", numberOne);
    numberTwo = Math.floor(Math.random()*(12-1))+1;
    $("#two").attr("data-value", numberTwo);
    numberThree = Math.floor(Math.random()*(12-1))+1;
    $("#three").attr("data-value", numberThree);
    numberFour = Math.floor(Math.random()*(12-1))+1;
    $("#four").attr("data-value", numberFour);
    //console.log(reset)
}
//click for crystals
$(".crystalimage").on("click", function () {
    var crystal = $(this).attr("data-value")
    //console.log(crystal)
    counter += parseInt(crystal)
    //console.log(counter)
    $("#finalTotal").text(counter)

    if (counter === randomNumber){
        yay();
        //reset();
    } else if (counter > randomNumber){
        loser();
        //reset();
    }

    //adds the wins to the player total
function yay () {
    wins++
    $("#numberWins").text(wins);
    reset();
    alert ("Winner winner chicken dinner!");
}
//adds the losses to the player total
function loser () {
    losses++
    $("#numberLosses").text(losses);
    reset();
    alert ("The crystals are not in alignment. You lose.");
    //console.log(loser)
}

});
});


//TODO:
//generate a random number as the player goal x
    //different at the start of each game x
    //display x
//generate a random number/currency for each crystal x
    //different at the beginning of each game x
    //not displayed x
//add the random currency for clicked crystals to the player's score x
//compare player score to player goal every time a crystal is clicked
    //if player score is < player goal, keep going
    //if player score is === to player goal, alert YOU WIN!
        // ++ wins
        //reset game
    //if player score is > player goal, alert YOU LOSE - try again!
        // ++ losses
        //reset game


//remember wins and losses variable outside of click


//tell it to execute a code when the DOM is fully loaded (document.ready function)
//number that we want to change by clicking crystals variable
//variable that shows that i have generated a random target number
//variables that define the other elements in the game
//all of this only within document.ready
