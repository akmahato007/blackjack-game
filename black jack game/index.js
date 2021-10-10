let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")



let player  = {
    name: "John",
    chips:124
}

let playerEl = document.getElementById("player-el")
playerEl.textContent =  player.name + ": $" +player.chips



let cards = [] //array list of ordered items
let message = " "
let sum = 0
let hasBlackJack = false
let isAlive = false

function getRandomNumber(){
    let randomNumber =  Math.floor(Math.random() * 13) + 1
    return randomNumber
}

//create a function called startGame and run renderGame under it

function startGame(){
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [ firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Card: " 
    // + cards[0] + " " + cards[1]

    //create a for loop to count all the cards in cards array
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a card?"
    }else if(sum === 21){
        message = "Whoo! You have a Black jack"
        hasBlackJack = true
    }else{
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    

    //allow only when player is alive and has not got black jack
    if(isAlive === true && hasBlackJack === false){
        // console.log("you have drawn a new card")
        let card = getRandomNumber()
        sum += card

        //push new card to cards array
        cards.push(card)
        renderGame()
    }
}