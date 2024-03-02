const minNum=1;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum-minNum+1)+minNum);

let maxAttempts=3;
let attempts=0;
let isRunning=true;

const guessField=document.getElementById("guessfield");
const message=document.getElementById("message");
const submitButton = document.getElementById("submitGuess");
submitButton.addEventListener("click",checkGuess);

function checkGuess(){ 

   
    const guess = parseInt(guessField.value);
    if(!isRunning){
        return;
    }
    
    if(isNaN(guess)){
        window.alert("Enter Invalid Input");
    }

    else if(guess<minNum||guess>maxNum){
    window.alert("Enter Invalid Input");
    }

    else{
        attempts++;
        if(guess<answer){
            message.textContent = "Too low! Try a higher number.";
        }
        else if(guess>answer){
            message.textContent = "Too high! Try a lower number.";
        }
        else{
            message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
            isRunning= false;
        }
        if (attempts >= maxAttempts) {
            message.textContent = `Attempts are over. You lost the game. The correct number was ${answer}.`;
            isRunning = false;
        }

    }
}






