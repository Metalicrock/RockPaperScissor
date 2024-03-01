function getComputerChoice(){
    let computerChoice = "";
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
    
    if(playerChoice === computerChoice){
        console.log("Its a Tie!");
    }else if(playerChoice === "Rock" && computerChoice === "Paper"){
        console.log("Paper Beats Rock! You lose.");
    }else if(playerChoice === "Paper" && computerChoice === "Rock"){
        console.log("Paper Beats Rock! You win!");
    }else if(playerChoice === "Scissor" && computerChoice === "Rock"){
        console.log("Rock Beats Scissor! You lose");
    }else if(playerChoice === "Rock" && computerChoice === "Scissor"){
        console.log("Rock Beats Scissor! You Win.")
    }else if(playerChoice === "Paper" && computerChoice === "Scissor"){
        console.log("Scissor Beats paper! You lose.");
    }else if(playerChoice === "Scissor" && computerChoice === "Paper"){
        console.log("Scissor Beats Paper! You win.");
    }
    
}



console.log(getPlayerChoice());

console.log(getComputerChoice());