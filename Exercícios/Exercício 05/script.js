const inputQtd = document.querySelector("#quantidade")
const inputNome = document.querySelector("#nome")
const button = document.querySelector("#adicionar")
const span = document.querySelector("span")

let valorQtd = null
let valorNome = null

function adicionarItem() {
    valorQtd = Number(inputQtd.value)
    valorNome = inputNome.value
    span.style.display = "none"
}

button.addEventListener("click", adicionarItem)