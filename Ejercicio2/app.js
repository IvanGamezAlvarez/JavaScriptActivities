const aditionNumber = document.getElementById("adition-button")
const thermometerButton = document.getElementById("termometro-button")
const guessButton = document.getElementById("guess-button")
const number = document.getElementById("number")
const attemptsText = document.getElementById("attempts-text")
const npcNumber = document.getElementById("npc-number")

let LightAttemps = 3
let initailNumber = 0


const gameNumber = Math.floor(Math.random() * 100) + 1;


aditionNumber.addEventListener("click",()=>{
    let numberToAdd = prompt("Ingrese un numero para sumar")
    initailNumber += Number(numberToAdd)
    if (initailNumber > 100){
        initailNumber = 100
    }
    number.textContent = initailNumber
    
}
)
thermometerButton.addEventListener("click",()=>{
    if (LightAttemps > 0){
        LightAttemps -= 1
        attemptsText.textContent = `Te quedan ${LightAttemps} usos del semaforo`
      
        let diferentionPlus =  gameNumber - initailNumber
        let diferentionLess = initailNumber - gameNumber
        if (diferentionLess < 11 && diferentionLess > 0|| diferentionPlus < 11 && diferentionPlus > 0){
            number.style.color = "Green"
        }
        else if(diferentionLess < 31 && diferentionLess > 0|| diferentionPlus < 31 && diferentionPlus > 0){
            number.style.color = "Yellow"
        }
        else if(diferentionLess < 51 && diferentionLess > 0|| diferentionPlus < 51 && diferentionPlus > 0){
            number.style.color = "Red"
        }

    } else{
        attemptsText.textContent = "te quedaste sin intentos"   
        }
    }
)
guessButton.addEventListener("click",()=>{
    let diferentionPlus =  gameNumber - initailNumber
    let diferentionLess = initailNumber - gameNumber
    npcNumber.textContent = gameNumber
        if (diferentionLess < 6 && diferentionLess > 0|| diferentionPlus < 6 && diferentionPlus > 0){
            attemptsText.textContent = "Ganaste"   
        } 
        else {
            attemptsText.textContent = "Perdiste"   
        }

    }
)