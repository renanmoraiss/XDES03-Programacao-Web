const btnAdd = document.querySelector(".btn-add")
const listaTarefas = document.querySelector(".lista-tarefas")
let nomeTarefa = document.querySelector(".nome-tarefa")
let campoQtd = document.querySelector(".qtd-tarefas")

let qtdTarefas = 0

function adicionarTarefa() {
    if (nomeTarefa.value == "") {
        alert("Preencha o campo")
        return
    }
    qtdTarefas++
    const card = document.createElement("div")
    const nomeCard = document.createElement("span")
    nomeCard.innerText = nomeTarefa.value
    const btnRemoverCard = document.createElement("button")

    card.style.display = "flex"
    card.style.justifyContent = "space-between"
    card.style.background = "rgb(163 199 195)"
    card.style.padding = "12px"
    card.style.borderRadius = "12px"
    card.style.border = "2px solid gray"

    btnRemoverCard.style.cursor = "pointer"
    btnRemoverCard.style.padding = "4px 8px"
    btnRemoverCard.style.border = "none"
    btnRemoverCard.style.borderRadius = "8px"
    btnRemoverCard.style.backgroundColor = "red"
    btnRemoverCard.style.color = "white"

    btnRemoverCard.innerText = "Remover"

    listaTarefas.appendChild(card)
    card.appendChild(nomeCard)
    card.appendChild(btnRemoverCard)

    campoQtd.innerText = ` ${qtdTarefas} `

    if (qtdTarefas === 5) {
        alert("Você atingiu o limite de tarefas!")
        btnAdd.disabled = true
    }

    btnRemoverCard.addEventListener("click", () => {
        card.remove()
        qtdTarefas--
        campoQtd.innerText = ` ${qtdTarefas} `
        if (qtdTarefas < 5) {
            btnAdd.disabled = false  
        }
    })
}

btnAdd.addEventListener("click", adicionarTarefa)