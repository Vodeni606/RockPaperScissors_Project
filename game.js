let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    
    const choice = Math.floor(Math.random()*3);

    if (choice === 0){

        return "Rock";

    }else if (choice === 1) {

        return "Paper";

    }else {

        return "Scissors";
    }

}

console.log(getComputerChoice())

function getHumanChoice() {

    const choice = prompt("Rock,Paper or Scissors ?");

    return choice;
}

console.log(getHumanChoice())

