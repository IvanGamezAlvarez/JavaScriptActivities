
let rightAnswers = 0
let scoreToWin = 10
let alreadyWin = false
const cards = [1,2,3,4,5,6,7,8,9,10]
let oldCardsIndexs = []


function GetARandomCard(oldCard){
    
    if (oldCard){

    } else{
     let newCard =  Math.floor(Math.random() * cards.length);
     return newCard
    }


}


function ShowCard(){
    const nextCard = prompt('La siguiente carta sera "Mayor o Menor" escriba su respuesta') 
    



}

function StartGame(){

    let newCard = GetARandomCard()
    alert(`La carta fue ${newCard}`)
    ShowCard()
}


StartGame()
