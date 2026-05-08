const btnAdd = document.querySelector("#btn-add")
const cardList = document.querySelector(".card-list")

function adicionarCard() {
    //console.log("testando")
    const card = document.createElement("div")
    cardList.appendChild(card)

    const cardImg = document.createElement("img")
    const cardName = document.createElement("span")
    const cardBtn = document.createElement("button")

    card.appendChild(cardImg)
    card.appendChild(cardName)
    card.appendChild(cardBtn)

    card.style.backgroundColor = "#ffffff24"
    card.style.padding = "12px"
    card.style.textAlign = "center"
    card.style.borderRadius = "6px"

    cardImg.style.height = "100px"
    cardImg.style.borderRadius = "6px"

    cardName.style.display = "flex" 
    cardName.style.justifyContent = "center"
    cardName.style.color = "black"
    cardName.style.fontWeight = "600"

    cardBtn.style.fontSize = "14px"
    cardBtn.style.fontWeight = "600"
    cardBtn.style.padding = "2px 50px"
    cardBtn.style.border = "none"
    cardBtn.style.borderRadius = "20px"
    cardBtn.style.backgroundColor = "#c8c9cd"
    cardBtn.style.cursor = "pointer"

    cardBtn.innerText = "X"

    let random = Math.floor(Math.random() * 2)
    if (random === 0) {
        cardImg.src = "figures/darth-vader.jpg"
        cardName.innerText = "Darth Vader"
    } else {
        cardImg.src = "figures/r2-d2.jpg"
        cardName.innerText = "R2-D2"
    }

    cardBtn.addEventListener("click", () => {
        card.remove()
    })
}

btnAdd.addEventListener("click", adicionarCard)