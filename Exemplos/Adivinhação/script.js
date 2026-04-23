//buscando os inputs no HTML
const initialValue = document.querySelector("#inicio")
const finalValue = document.querySelector("#fim")
const numberThinking = document.querySelector("#adv")

//buscando os botões no HTML
const generateNumber = document.querySelector("#btn-gerar")
const guessNumber = document.querySelector("#btn-adv")

//Utilizando os valores do intervalo(início e fim)
let inicio = null
let fim = null
let randomNumber = null
let numeroParaAdivinhar = null

//1ª Forma de adicionar um evento no botão (function)
function generatedNumber() {
    //console.log("Testando o Botão")
    //Pegando os valores do input e transformando string em number
    inicio = Number(initialValue.value)
    fim = Number(finalValue.value)

    //Tratando possíveis inconsistências
    if (inicio === fim || inicio > fim) {
        if (inicio === fim) {
            alert("Os valores devem ser diferentes")
        } else if (inicio > fim) {
            alert("O início deve ser menor que o fim")
        }
        return
    }

    if (!checkingInputs()) {
        return
    }

    randomNumber = Math.trunc(Math.random() * (fim - inicio + 1) + inicio)
    console.log(randomNumber) //Testando
}

function guessingNumber() {
    //console.log("Testando o Botão")
    if (randomNumber == null) {
        alert("Gere um número!")
        return
    }
    if (!checkingInputs()) {
        return
    }

    numeroParaAdivinhar = Number(numberThinking.value)

    if (!numeroParaAdivinhar) {
        alert("Preencha o campo de adivinhar")
        return
    }

    if (numeroParaAdivinhar < inicio || numeroParaAdivinhar > fim) {
        alert('Número fora do intervalo!')
        return
    }

    if (numeroParaAdivinhar === randomNumber) {
        alert('Parábens! Você acertou.')
        return
    } else {
        alert('Vish... Você errou.')
    }
}

function checkingInputs() {
    //Tratando possíveis inconsistências 
    if (!inicio || !fim) {
        if (!inicio && !fim) {
            alert("Preencha os campos")
        } else if (!inicio) {
            alert("Preencha o campo inicial")
        } else if (!fim) {
            alert("Preencha o campo final")
        }
        return false
    }
    return true
}

generateNumber.addEventListener("click", generatedNumber)
guessNumber.addEventListener("click", guessingNumber)

//2ª Forma de adicionar um evento no botão (arrow function)
//generateNumber.addEventListener("click", () => {
//    console.log("Testando Novamente")
//});