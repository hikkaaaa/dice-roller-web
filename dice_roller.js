function rollDice(){
    const userInput = document.getElementById("myInput").value;
    const diceResult = document.getElementById("dice-array-answer");
    const diceImages = document.getElementById("dice-image");

    const result = [];
    const images = [];

    for(let i = 1; i <= userInput; i++){
        const randomNumber = Math.floor(Math.random() * 6) + 1; 
        result.push(randomNumber);
        images.push(`<img src = "side${randomNumber}.jpg" alt = "Dice ${randomNumber}">`);
    }
    diceResult.textContent = "dice: " + [...result]; 
    diceImages.innerHTML = images.join('');
}
