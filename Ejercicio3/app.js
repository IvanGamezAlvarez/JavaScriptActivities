let score = 0
let lastCard
let oldCardsIndexs = []
const numberOfCards = 13
const numberOfSymbols = 4
const scoreToWin = 3

//this funcion make a number a symbol
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

function VerifyCard(newCard) {
    return oldCardsIndexs.includes(newCard)
}

function RegisterCard(card) {
    oldCardsIndexs.unshift(card)
}

function GetARandomCard() {
    let newNumber = Math.floor(Math.random() * (numberOfCards) + 1);
    let newSymbol = Math.floor(Math.random() * (numberOfSymbols) + 1);
    let newCard = newNumber + " " + MakeSymbol(newSymbol)
    lastNumber = newNumber
    lastCard = newCard
    RegisterCard(newCard)
    return newCard
}

function ValidateCard(state, beforeCard) {
    const newCard = GetARandomCard()
    newCardSplitted = newCard.split(" ")
    beforeCardSplitted = beforeCard.split(" ")
    let newState = parseInt(newCardSplitted[0]) > parseInt(beforeCardSplitted[0])
    alert(`la carta anterior fue ${parseInt(beforeCardSplitted[0])} la carta nueva fue  ${parseInt(newCardSplitted[0])} el estado que mandaste es: ${state} y e es estado correcto es: ${newState}`)
    if (parseInt(newCardSplitted[0]) == parseInt(beforeCardSplitted[0])) {
        alert(`La carta fue del mismo valor, la carta nueva fue ${newCard}`)
    }
    else if (state == newState) {
        score += 1
        alert(`Adivinaste tu nuevo puntaje es de ${score}, la carta nueva fue ${newCard}`)
    }
    else {
        alert(`Perdiste, la carta nueva fue ${newCard}`)
    }
}

//this funcion have the process for ask for the next card  and send the validation
function GuessCard(newCard) {
    const nextCard = prompt(`La siguiente carta sera "Mayor o Menor" escriba su respuesta, la carta actual es: ${newCard}`)
    if (nextCard == "Mayor") {
        ValidateCard(true, newCard)
    } else if (nextCard == "Menor") {
        ValidateCard(false, newCard)
    } else {
        alert(`${nextCard}  no es un comando valido asegurate de haber escrito "Mayor" o "Menor"`)
        GuessCard()
    }
}

//this funcion start the game
function StartGame() {
    GetARandomCard()
    while (score < scoreToWin) {
        GuessCard(lastCard)
    }
    alert("Felicidades ganaste el juego!")
}

StartGame()
