function getComputerChoice() {
    
    const choice = Math.floor(Math.random()*3);

    if (choice === 0){

        return "rock";

    }else if (choice === 1) {

        return "paper";

    }else {

        return "scissors";
    }

}


function getHumanChoice() {

    const choice = prompt("Rock,Paper or Scissors ?").toLowerCase();

    return choice;
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
  
    if (humanChoice === computerChoice) {
        return "Tie";

        }else if (humanChoice === "rock" && computerChoice === "scissors"){
            humanScore++;
            return "You win! " + humanChoice + " beats " + computerChoice;
        }else if (humanChoice === "paper" && computerChoice === "rock"){
            humanScore++;
            return "You win! " + humanChoice + " beats " + computerChoice;
        }else if (humanChoice === "scissors" && computerChoice === "paper" ){
            humanScore++;
            return "You win! " + humanChoice + " beats " + computerChoice;
        }else{
            computerScore++;
            return "You lose! " + computerChoice + " beats " + humanChoice;
        }
        

    }

console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));

if (humanScore > computerScore){
    console.log("Human wins"); 
}else {
    console.log("Computer wins");
}


}

playGame();