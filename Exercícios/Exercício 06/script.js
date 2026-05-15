const btnBuscar = document.querySelector("#buscar")
const listaPokemon = document.querySelector(".lista-pokemon")

const api = "https://pokeapi.co/api/v2/"

let random = null

async function adicionarPokemon() {    
    random = Math.trunc(Math.random() * 190)
    const response = await fetch(`${api}pokemon/${random}`)
    const data = await response.json()
    console.log(data)
    //
    const cardPokemon = document.createElement('div')
    const imgPokemon = document.createElement('img')
    const nomePokemon = document.createElement('span')
    const btnRemoverPokemon = document.createElement('button')
    //
    listaPokemon.appendChild(cardPokemon)
    cardPokemon.appendChild(imgPokemon)
    cardPokemon.appendChild(nomePokemon)
    cardPokemon.append(btnRemoverPokemon)
    imgPokemon.src = data.sprites.front_default
    nomePokemon.innerText = data.name
    btnRemoverPokemon.innerText = "X"
    //
    cardPokemon.style.display = "grid"
    cardPokemon.style.textAlign = "center"
    cardPokemon.style.border = "1px solid black"
    cardPokemon.style.borderRadius = "10px"
    cardPokemon.style.padding = "10px"
    cardPokemon.backgroundColor = "#e6e3e3"
    imgPokemon.style.margin = "0 auto"
    btnRemoverPokemon.style.backgroundColor = "#f2d6d6"
    //
    btnRemoverPokemon.addEventListener("click", () => {
        cardPokemon.remove()
    })
}

btnBuscar.addEventListener("click", adicionarPokemon)