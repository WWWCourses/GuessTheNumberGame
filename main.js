// Initialize variables
let maxNumber = 100;
let machineNumber = Math.floor(Math.random()*maxNumber)+1;
alert(machineNumber);
let userGuess = null;
let userTries = 0;
let maxTries = 2;



// Main game logic
do{
    userGuess = parseInt( prompt(`Enter a number (1..${maxNumber})`) );

    // validate user guess (must be number in [1..maxNumber])
    if( isNaN(userGuess) || userGuess < 1 || userGuess > maxNumber ) {
        alert(`Моля въведете валидно число между 1 и ${maxNumber}!`);
        continue;
    }

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
