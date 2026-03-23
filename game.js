function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    } else if (humanChoice === "scissors" && computerChoice === "paper")  {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}

function getHumanChoice() {
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    rock.addEventListener('click', function() {
        const result = playRound("rock", getComputerChoice());
        document.getElementById("results").textContent = result;
        document.getElementById("score").textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    });

    paper.addEventListener('click', function() {
        const result = playRound("paper", getComputerChoice());
        document.getElementById("results").textContent = result;
        document.getElementById("score").textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    });

    scissors.addEventListener('click', function() {
        const result = playRound("scissors", getComputerChoice());
        document.getElementById("results").textContent = result;
        document.getElementById("score").textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    });
}

getHumanChoice();