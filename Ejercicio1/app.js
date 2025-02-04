console.log("Hola Amigazos")

const Propina = document.getElementById("tip")
const tipButton = document.getElementById("tip-button")
const deleteButton = document.getElementById("delete-button")

const mensajePredeterminado = "No hay ninguna propina"

deleteButton.style.display = "none"



tipButton.addEventListener('click', ()=>{
    let tipPrompt = prompt("Ingrese la propina que desea dejar")
    let tip = Number(tipPrompt)

    if (tip>0){
        Propina.textContent = `La propina fue de ${tip}$`
        tipButton.textContent ="Cambiar propina"
        deleteButton.style.display = "inline"
    } else{
        Propina.textContent = mensajePredeterminado

    }
    
})

deleteButton.addEventListener('click', ()=>{
    Propina.textContent = mensajePredeterminado
    deleteButton.style.display = "none"

})


