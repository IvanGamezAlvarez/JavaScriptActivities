//Variables
let score = 0
let lastCard
let oldCardsIndexs = []
let gameEnd = false
const numberOfCards = 13
const numberOfSymbols = 4
const scoreToWin = 10

//Functions

//this funcion make a number to symbol
function MakeSymbol(symbol) {
    if (symbol == "1") {
        return "Hearth"
    } else if (symbol == "2") {
        return "Diamond"
    } else if (symbol == "3") {
        return "Clover"
    } else if (symbol == "4") {
        return "Spade"
    }
}

// function VerifyCard(newCard) {
//     return oldCardsIndexs.includes(newCard)
// }

// function RegisterCard(card) {
//     oldCardsIndexs.unshift(card)
// }

function GetARandomCard() {
    const newNumber = Math.floor(Math.random() * (numberOfCards) + 1);
    const newSymbol = Math.floor(Math.random() * (numberOfSymbols) + 1);
    const newCard = newNumber + " " + MakeSymbol(newSymbol)
    lastCard = newCard
    return newCard
}

//this function valide the answer and increment the score or finish the game
function ValidateCard(state, beforeCard) {
    const newCard = GetARandomCard()
    newCardSplitted = newCard.split(" ")
    beforeCardSplitted = beforeCard.split(" ")
    let newState = parseInt(newCardSplitted[0]) > parseInt(beforeCardSplitted[0])
    if (parseInt(newCardSplitted[0]) == parseInt(beforeCardSplitted[0])) {
        alert(`La carta fue del mismo valor, la carta nueva fue ${newCard} no recibiste ningun punto intentalo de nuevo`)
    }
    else if (state == newState) {
        score += 1
        alert(`la carta nueva fue ${newCard}, Adivinaste tu nuevo puntaje es de ${score}`)
        if (score == scoreToWin) {
            alert("Ganaste!")
            gameEnd = true
        }
    }
    else {
        alert(`la carta nueva fue ${newCard}, Perdiste`)
        gameEnd = true
    }
}

//this funcion have the process for ask for the next card and send the validation
function GuessCard(newCard) {
    const nextCard = prompt(`La siguiente carta sera "Mayor o Menor" escriba su respuesta, la carta actual es: ${newCard}`)
    if (nextCard == "Mayor") {
        ValidateCard(true, newCard)
    } else if (nextCard == "Menor") {
        ValidateCard(false, newCard)
    } else {
        alert(`${nextCard}  no es un comando valido asegurate de haber escrito "Mayor" o "Menor"  recuerda respetar las mayusculas`)
        GuessCard(newCard)
    }
}

//this funcion start the game
function StartGame() {
    GetARandomCard()
    while (gameEnd != true) {
        GuessCard(lastCard)
    }
    alert(`el juego termino tu puntaje fue ${score}`)
    const playAgain = confirm("¿Quieres volver a jugar?")
    if (playAgain) {
        score = 0
        gameEnd = false
        StartGame()
    } else {
        alert(`Gracias por jugar`)
    }
}

//Calls

StartGame()
