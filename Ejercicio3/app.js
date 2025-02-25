let score = 0
let rightAnswers = 0
let scoreToWin = 10
let alreadyWin = false
const numberOfCards = 13
const numberOfSymbols = 4
let lastCard


let oldCardsIndexs = []

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
    return  oldCardsIndexs.includes(newCard)
}


function RegisterCard(card) {
    oldCardsIndexs.unshift(card)
}


function GetARandomCard() {
    let newNumber = Math.floor(Math.random() * (numberOfCards  ) +1) ;
    let newSymbol = Math.floor(Math.random() * (numberOfSymbols  ) +1)  ;
    let newCard = newNumber + " " + MakeSymbol(newSymbol)
    
    lastNumber = newNumber
    lastCard = newCard
    RegisterCard(newCard)
    return newCard

}


function ValidateCard(state, beforeCard){
    const newCard = GetARandomCard()
    newCardSplitted = newCard.split(" ")
    beforeCardSplitted = beforeCard.split(" ")

    
    let newState = parseInt(newCardSplitted[1]) > parseInt(beforeCardSplitted[1])
    alert(`la carta anterior fue ${parseInt(beforeCardSplitted[1])} la carta nueva fue  ${parseInt(newCardSplitted[1])} el estado que mandaste fue ${state} y el estado que due es ${newState}`)
    if(parseInt(newCardSplitted[1]) == parseInt(beforeCardSplitted[1])){
        alert(`La carta fue del mismo valor, la carta nueva fue ${newCard}`)
    }
    else if( state  == newState){
        score += 1
        alert(`Adivinaste tu nuevo puntaje es de ${score}, la carta nueva fue ${newCard}`)
    }
    else{
        alert(`Perdiste, la carta nueva fue ${newCard}`)
    }
}



function GuessCard(newCard) {
    const nextCard = prompt(`La siguiente carta sera "Mayor o Menor" escriba su respuesta, la carta anterior fue ${newCard}`)
    if (nextCard == "Mayor"){
        ValidateCard(true, newCard)
    } else if (nextCard == "Menor"){
        ValidateCard(false, newCard)

    } else{
        alert(`${nextCard}  no es un comando valido asegurate de haber escrito "Mayor" o "Menor"`)
        GuessCard()
    }
}

function StartGame() {
    let newCard = GetARandomCard()

    while (score  < scoreToWin) {
        GuessCard(lastCard)        
    }
}


StartGame()
