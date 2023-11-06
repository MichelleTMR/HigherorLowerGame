//You are tasked with building a Higher or Lower Guessing Game! 
 //- The application should allow a user to: submit a number as their guess and receive response that their guess needs to be "higher" or "lower". 
 //- When the user guesses the correct number, the app should congratulate them.
 
 //Bonus: 
 //Generate a random number every time the users plays the game.

let randomNumber;
resetGame()

function checkNumber(){
    //when user click button pull out value
    let input = document.getElementById("numberinput");
    if(randomNumber == input.value){
        alert("M-my, uh... OH MY GOSH! Congratulations! you are correct!!!")
    } else if( randomNumber < input.value){
        alert("I hate to say 'lose,' but...you lose. Guess lower!")
    } else {
        alert("I hate to say 'lose,' but...you lose. Guess higher!")
    }
}


function resetGame(){
    randomNumber = Math.floor(Math.random()* 10 + 1);
    console.log(randomNumber)
    alert("Let's play High Card, Low Card again!")
}

