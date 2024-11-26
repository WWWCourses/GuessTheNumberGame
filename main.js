// Initialize variables
let machineNumber = Math.floor(Math.random()*100)+1;
let userGuess = null;


// Main game logic
do{
    userGuess = parseInt( prompt('Enter a number (1..100)') );

    // compare user guess with machineNumber and give feadback
    if(userGuess>machineNumber){
        alert(`${userGuess} is too high!`)
    }else if(userGuess<machineNumber){
        alert(`${userGuess} is too low!`)
    }else if(userGuess===machineNumber){
        alert(`Bravo! ${userGuess} is correct!`)
    }else{
        alert('Unexpected case')
    }
} while (userGuess!==machineNumber);
