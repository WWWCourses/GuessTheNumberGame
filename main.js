// Initialize variables
let maxNumber = 100;
let machineNumber;
let userGuess = null;
let userTries = 0;
let maxTries = 10;
let level;
let userHistoryNumbers = [];

// Select level
level = prompt('Select level: Easy (1-10), Normal (1-50), Hard (1-100)')
switch (level.toLowerCase()) {
    case 'easy':
        maxNumber = 10;
        maxTries = 5;
        break;
    case 'normal':
        maxNumber = 50;
        maxTries = 7;
        break;
    case 'hard':
        maxNumber = 100;
        maxTries = 10;
        break;
    default: // Easy
        maxNumber = 10;
        maxTries = 5;
        break;
}

// Generate machine number
machineNumber= Math.floor(Math.random()*maxNumber)+1;
alert(machineNumber);


// Main game logic
do{
    userGuess = parseInt(
        prompt(`Enter a number (1..${maxNumber})\nHistory: ${userHistoryNumbers.join(',')}`)
    );

    // validate user guess (must be number in [1..maxNumber])
    if( isNaN(userGuess) || userGuess < 1 || userGuess > maxNumber ) {
        alert(`Моля въведете валидно число между 1 и ${maxNumber}!`);
        continue;
    }

    userTries++;
    userHistoryNumbers.push(userGuess);

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


    if(userTries===maxTries){
        alert(`Game Over! My number was ${machineNumber}`);
        break;
    }
} while (userGuess!==machineNumber);
alert(`You tried ${userTries} times!`)


