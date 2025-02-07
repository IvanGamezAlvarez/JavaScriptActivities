const additionNumber = document.getElementById("addition-button")
const retrybutton = document.getElementById("retry-button")
const thermometerButton = document.getElementById("thermometer-button")
const guessButton = document.getElementById("guess-button")
const number = document.getElementById("number")
const attemptsText = document.getElementById("attempts-text")
const npcNumber = document.getElementById("npc-number")
let LightAttemps = 3
let initailNumber = 0
let gameNumber = Math.floor(Math.random() * 100) + 1;

attemptsText.textContent =`You have ${LightAttemps} uses of the traffic light left`

additionNumber.addEventListener("click", () => {
    let numberToAdd = prompt("Enter a number to add")
    initailNumber += Number(numberToAdd)
    if (initailNumber > 100) {
        initailNumber = 100
    }
    number.textContent = initailNumber

}
)
thermometerButton.addEventListener("click", () => {
    if (LightAttemps > 0) {
        LightAttemps -= 1
        attemptsText.textContent = `You have left ${LightAttemps} uses of the semaphore`

        let differentiationPlus = gameNumber - initailNumber
        let differentiationLess = initailNumber - gameNumber
        if (differentiationLess < 11 && differentiationLess > 0 || differentiationPlus < 11 && differentiationPlus > 0) {
            number.style.color = "Green"
        }
        else if (differentiationLess < 31 && differentiationLess > 0 || differentiationPlus < 31 && differentiationPlus > 0) {
            number.style.color = "Yellow"
        }
        else if (differentiationLess < 51 && differentiationLess > 0 || differentiationPlus < 51 && differentiationPlus > 0) {
            number.style.color = "Red"
        }

    } else {
        attemptsText.textContent = "you ran out of attempts"
    }
}
)
guessButton.addEventListener("click", () => {
    let differentiationPlus = gameNumber - initailNumber
    let differentiationLess = initailNumber - gameNumber
    npcNumber.textContent = gameNumber
    if (differentiationLess < 6 && differentiationLess > 0 || differentiationPlus < 6 && differentiationPlus > 0) {
        attemptsText.textContent = "You won"
    }
    else {
        attemptsText.textContent = "You lost"
    }

}
)
retrybutton.addEventListener("click", () => {
    initailNumber = 0
    gameNumber = Math.floor(Math.random() * 100) + 1;
    LightAttemps = 3
    attemptsText.textContent =`You have ${LightAttemps} uses of the traffic light left`
    number.textContent = 0
    npcNumber.textContent  = "?"
    number.style.color = "Black"

}
)