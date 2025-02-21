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

function VerifyCard(number, symbol) {




}


function RegisterCard(card) {
    oldCardsIndexs.unshift(card)
}

function GetARandomCard() {

    if (lastCard) {
        

    } else {
        let newNumber = Math.floor(Math.random() * (numberOfCards  ) +1) ;
        let newSymbol = Math.floor(Math.random() * (numberOfSymbols  ) +1)  ;

        let newCard = newNumber + " " + MakeSymbol(newSymbol)
        RegisterCard(newCard)
        return newCard
    }


}


function GuessCard() {
    const nextCard = prompt('La siguiente carta sera "Mayor o Menor" escriba su respuesta')
    if (nextCard == "Mayor"){
        score += 1
        alert(`Adivinaste tu puntaje es de ${score}`)

    } else if (nextCard == "Menor"){
        score += 1
        alert(`Adivinaste tu puntaje es de ${score}`)

    } else{
        alert(`${nextCard}  no es un comando valido asegurate de haber escrito "Mayor" o "Menor"`)
        GuessCard()
    }

}

function StartGame() {
    let newCard = GetARandomCard()
    
    while (score  < 9) {
        alert(`La carta fue ${newCard}`)
        GuessCard()
        newCard = GetARandomCard()
    }
}


StartGame()
