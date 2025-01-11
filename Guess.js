// console.log(parseInt(Math.random()*100+1));

let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaning = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')  
const startOver = document.querySelector('.resultParas')  

const p = document.createElement('p')

let previousGuesses = []
let numGuesses = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
     e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess); // it foe checking in future also
    
    validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1){
        alert('Please enter a number greater than 1!')
    }
    else if (guess > 100){
        alert('Please enter a number less than 100!')
    }
    else{
        previousGuesses.push(guess)
        if(numGuesses === 10){
            displayGuess(guess)
            displayMessage(`Game Over! Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
    }
}
}

function checkGuess(guess){
     if(guess === randomNumber){
         displayMessage(`Congratulations! You guessed the number in ${numGuesses-1} chance!`)
         endGame()
     }
     else if (guess < randomNumber){
         displayMessage('Wrong! Guess the higher number than this!')
     }
     else if (guess > randomNumber){
         displayMessage('Wrong! Guess the lower number than this!')
     }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess};  `
    numGuesses++
    remaning.innerHTML = `${11 - numGuesses}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
     userInput.value = ''
     userInput.setAttribute('disabled', '')
     p.classList.add('button')
     p.innerHTML = '<h2><button class="New-Game" id="reset">Play Again</button></h2>'
     startOver.appendChild(p)
     playGame = false
     newGame()
}

function newGame(){
     const newGameButton = document.querySelector('#reset')
     newGameButton.addEventListener('click', function(e){
       randomNumber = parseInt(Math.random()*100+1)
         previousGuesses = []
         numGuesses = 1
         guessSlot.innerHTML = ''
         remaning.innerHTML = `${11 - numGuesses}`
         userInput.removeAttribute('disabled')
         startOver.removeChild(p)

         playGame = true
})
}






