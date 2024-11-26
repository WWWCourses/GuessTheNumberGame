// Initialize variables
let machineNumber = Math.floor(Math.random()*100)+1;
alert(machineNumber);
let userGuess = null;
let userTries = 0;
let maxTries = 2;


// Main game logic
do{
    userGuess = parseInt( prompt('Enter a number (1..100)') );

    // compare user guess with machineNumber and give feadback
    if(userGuess>machineNumber){
        alert(`${userGuess} is too high!`)
    }else if(userGuess<machineNumber){
        alert(`${userGuess} is too low!`)
    }else if(userGuess===machineNumber){
        alert(`Bravo! ${userGuess} is correct!`);
        break;
    }else{
        alert('Unexpected case')
    }

    userTries++;
    if(userTries===maxTries){
        alert(`Game Over! My number was ${machineNumber}`);
        break;
    }
} while (userGuess!==machineNumber);
