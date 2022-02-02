let btnGuess = document.getElementById('btn-guess');
let btnAgain = document.getElementById('play-again');
let outputMessage = document.getElementById('message');
let allContent = document.querySelector('.content');

let number = Math.floor(Math.random() * 15) + 1;

btnGuess.addEventListener('click', function(){
    let userInput = document.getElementById('input-number').value;
    if(userInput > number) {
        outputMessage.innerHTML = 'The number is too large, try smaller! &#128561'
    }else if (userInput < number) {
        outputMessage.innerHTML = 'The number is too small, try higher! &#128558'
    }if (userInput == number ) {
        outputMessage.innerHTML = `The number is correct! 🥳 The correct number is ${number}! `;
        btnAgain.classList.remove('hidden');
        allContent.classList.add('hidden');
    }
});

btnAgain.addEventListener('click', function() {
    window.location.reload();
})