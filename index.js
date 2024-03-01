let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let RNG = Math.floor(Math.random() * 3)

    if(RNG === 0){
      return "Rock";
    }else if(RNG === 1){
      return "Paper";
    }else{
       return "Scissor";
    }    
}

function getPlayerChoice(){
    return prompt("Choose Rock, Paper, or Scissor");
   
}


function playRound(){
    
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    console.log(playerChoice + " is the players pick");
    console.log(computerChoice + " is the computers pick");
    
    if(playerChoice.toLowerCase() === computerChoice.toLowerCase()){
        console.log("Its a Tie!");
    }else if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper"){
        console.log("Paper Beats Rock! You lose.");
        computerScore++;
    }else if(playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"){
        console.log("Paper Beats Rock! You win!");
        playerScore++;
    }else if(playerChoice.toLowerCase() === "scissor" && computerChoice.toLowerCase() === "rock"){
        console.log("Rock Beats Scissor! You lose");
        computerScore++;
    }else if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissor"){
        console.log("Rock Beats Scissor! You Win.");
        playerScore++;
    }else if(playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissor"){
        console.log("Scissor Beats paper! You lose.");
        computerScore++;
    }else if(playerChoice.toLowerCase() === "scissor" && computerChoice.toLowerCase() === "paper"){
        console.log("Scissor Beats Paper! You win.");
        playerScore++;
    }
    
}

function playGame(rounds){
    for(i = 0; i < rounds; i++){
        playRound();
        console.log("Player score is: " + playerScore);
        console.log("Computer score is: " + computerScore);
    }
}
console.log(getPlayerChoice());

console.log(getComputerChoice());