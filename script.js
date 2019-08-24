let result = "";
let computerSelection = "";
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    
    let choice = Math.floor(Math.random()*3);
    /*
    Choices:
    0 = Rock
    1 = Paper
    2 = Scissors
    */

    if (choice === 0){
        return 'Rock';
    }
    else if (choice === 1){
        return 'Paper';
    }
    else{
        return 'Scissors';
    }
}//end computerPlay()

function playerPlay(){

    let selection = "";

    do{
        selection = prompt("Choose Rock, Paper, or Scissors: ").toLowerCase();
        if (selection != "rock" && selection != "paper" && selection != "scissors"){
            alert("You didn't choose any of the correct options. Choose again!");
        }
    }
        
        while (selection != "rock" && selection != "paper" && selection != "scissors");
        return selection;
}

function win(){
    playerScore ++;
    
}

function lose(){
    computerScore ++;
    
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            return result = "Draw! Both players have chosen Rock."; 
        }
        else if (computerSelection == "paper"){
            return "You lose. The other player has chosen Paper." + lose();
        }
        else{
            return result = "You win! The other player has chosen Scissors." + win();
        }
    }

    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return result = "You have won! The other player chose Rock." + win();
        }
        else if (computerSelection == "paper"){
            return result = "Draw! Both players have chosen Paper.";
        }
        else{
            return result = "You lose. The other player has chosen Scissors" + lose();
        }
    }

    else{
        if (computerSelection == "rock"){
            return result = "You lose. The other player has chosen Rock." + lose();
        }
        else if (computerSelection == "paper"){
            return result = "You win! The other player has chosen Paper." + win();
        }
        else{
            return result = "Draw! Both players have chosen Scissors.";
        }
    }



}//end of playRound()


function Game(){
    for (let i = 0; i < 5; i++){
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);

        console.log(result);
        console.log("This round the Player choice was: " + playerSelection);
        console.log("and the Computer choice was: "+ computerSelection);
        console.log("The score so far is - Player: " + playerScore + " x " + "Computer: " + computerScore);
    }
}