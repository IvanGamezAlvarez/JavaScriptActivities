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
    }  else{
        return "" +symbol
    }


}

function VerifyCard(newCard) {

    return  oldCardsIndexs.includes(newCard)
}


function RegisterCard(card) {
    oldCardsIndexs.unshift(card)
}



function ValidateCard(state, beforeCard){
    lastCardSplitted = lastCard.split(" ")
    beforeCardSplitted = beforeCard.split(" ")
    let newState = lastCard[1] >= beforeCard[1]
    if( state  == newState){
        score += 1
        alert(`Adivinaste tu nuevo puntaje es de ${score}`)
    }
    else{
        alert("Perdiste")

    }
    alert(newState)
    
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

function GuessCard(oldCard) {
    const nextCard = prompt('La siguiente carta sera "Mayor o Menor" escriba su respuesta')
    GetARandomCard()
    if (nextCard == "Mayor"){
        ValidateCard(true, oldCard)
    } else if (nextCard == "Menor"){
        ValidateCard(false, oldCard)

    } else{
        alert(`${nextCard}  no es un comando valido asegurate de haber escrito "Mayor" o "Menor"`)
        GuessCard()
    }

}

function StartGame() {
    let newCard = GetARandomCard()
    alert(`La carta fue ${newCard}`)
    while (score  < scoreToWin) {
        GuessCard(lastCard)
        alert(`La carta fue ${newCard}`)
        newCard = GetARandomCard()
    }
}


StartGame()
