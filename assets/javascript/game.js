
$(document).ready(function() {
// Global Variable

// Do I need to have 4 varibles for all the crystals?
var randomNum = 0;
var crystal1Num = 0;
var crystal2Num = 0;
var crystal3Num = 0;
var crystal4Num = 0;
var wins = 0;
var loss = 0;
var totalScore = 0;

//Start new game
$("body").on("click", "#start", function(){

 // Randomly choose a number between 18 and 120
randomNum = Math.floor((Math.random() * 101) + 18);

// Randomly choose a number between 1 and 12 for all 4 crystals and they should have a different number
crystal1Num = Math.floor((Math.random() * 11) + 1);
crystal2Num = Math.floor((Math.random() * 11) + 1);
crystal3Num = Math.floor((Math.random() * 11) + 1);
crystal4Num = Math.floor((Math.random() * 11) + 1);

//If statements for avoiding numbers to be the same

if (crystal1Num === crystal2Num || crystal1Num === crystal3Num || crystal1Num === crystal4Num){
    crystal1Num = Math.floor((Math.random() * 11) + 1);
};
if (crystal2Num === crystal3Num || crystal2Num === crystal4Num){
    crystal2Num = Math.floor((Math.random() * 11) + 1);
}
if (crystal3Num === crystal4Num){
    crystal3Num = Math.floor((Math.random() * 11) + 1);
};

// console.log(crystal1Num);
// display random number
$("#number").text(randomNum);

// display user's score
$("#total").text(totalScore);
});

// display Win
$("#win").text(wins);

// display loss
$("#losses").text(loss);

//reset the game

function reset(){
    randomNum = Math.floor((Math.random() *101) + 18);
    $("#Number").text(randomNum);
    crystal1Num = Math.floor((Math.random() * 11) + 1);
    crystal2Num = Math.floor((Math.random() * 11) + 1);
    crystal3Num = Math.floor((Math.random() * 11) + 1);
    crystal4Num = Math.floor((Math.random() * 11) + 1);    
    totalScore= 0;
    $("#total").text(totalScore);
 } 


// .on click function for crystal 1. Inside the onclick function, each crystals will add up to the total score

$("#crystal1").on("click", function(){
    totalScore = totalScore + crystal1Num;
    // console.log(totalScore);
    $("#total").text(totalScore);

// If totalScore is === to randomNum, win++, display "You win!" message, reset game, 
if(totalScore === randomNum){
    wins ++;
    $("#win").text(wins);
    $(".message").text("You win!");
    reset();
}

// if totalScore is greater than randomNum, loss++, display "Sorry, you loss!" message, reset game
if(totalScore > randomNum){
    loss ++;
    $("#losses").text(loss);
    $(".message").text("Sorry, you loss!");
    reset();
}
});

// .on click function for crystal 2. Inside the onclick function, each crystals will add up to the total score

$("body").on("click", "#crystal2", function(){
    totalScore = totalScore + crystal1Num + crystal2Num;
    // console.log(totalScore);
    $("#total").text(totalScore);

// If totalScore is === to randomNum, win++, display "You win!" message, reset game, 
if(totalScore === randomNum){
    wins ++;
    $("#win").text(wins);
    $(".message").text("You win!");
    reset();
}

// if totalScore is greater than randomNum, loss++, display "Sorry, you loss!" message, reset game
if(totalScore > randomNum){
    loss ++;
    $("#losses").text(loss);
    $(".message").text("Sorry, you loss!");
    reset();
}
});

// .on click function for crystal 3. Inside the onclick function, each crystals will add up to the total score

$("body").on("click", "#crystal3", function(){
    totalScore = totalScore + crystal1Num + crystal2Num + crystal3Num;
    // console.log(totalScore);
    $("#total").text(totalScore);

// If totalScore is === to randomNum, win++, display "You win!" message, reset game, 
if(totalScore === randomNum){
    wins ++;
    $("#win").text(wins);
    $(".message").text("You win!");
    reset();
}

// if totalScore is greater than randomNum, loss++, display "Sorry, you loss!" message, reset game
if(totalScore > randomNum){
    loss ++;
    $("#losses").text(loss);
    $(".message").text("Sorry, you loss!");
    reset();
}
});

// .on click function for crystal 4. Inside the onclick function, each crystals will add up to the total score

$("body").on("click", "#crystal4", function(){
    totalScore = totalScore + crystal1Num + crystal2Num + crystal3Num + crystal4Num;
    // console.log(totalScore);
    $("#total").text(totalScore);
    
// If totalScore is === to randomNum, win++, display "You win!" message, reset game, 
if(totalScore === randomNum){
    wins ++;
    $("#win").text(wins);
    $(".message").text("You win!");
    reset();
}

// if totalScore is greater than randomNum, loss++, display "Sorry, you loss!" message, reset game
if(totalScore > randomNum){
    loss ++;
    $("#losses").text(loss);
    $(".message").text("Sorry, you loss!");
    reset();
}
});
});
