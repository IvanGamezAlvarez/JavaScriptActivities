const aditionNumber = document.getElementById("adition-button")
const thermometerButton = document.getElementById("termometro-button")
const guessButton = document.getElementById("guess-button")
const number = document.getElementById("number")


aditionNumber.addEventListener("click",()=>{
    
    let numberToAdd = prompt("Ingrese un numero para sumar")
    let initailNumber = 0
    initailNumber += Number(numberToAdd)
    number.textContent = initailNumber

    }
)
thermometerButton.addEventListener("click",()=>{
    
    let numberToAdd = prompt("Ingrese un numero para sumar")
    let initailNumber = 0
    initailNumber += Number(numberToAdd)
    number.textContent = initailNumber
    
    }
)