const main = document.querySelector("main")
const span = document.querySelector("span")
const button = document.querySelector("button")

function changeColor() {
    const newColor = {
        r: Math.trunc(Math.random() * 256),
        g: Math.trunc(Math.random() * 256),
        b: Math.trunc(Math.random() * 256),
    }
    main.style.backgroundColor = `rgb(${newColor.r},${newColor.g},${newColor.b})`
    span.innerText = `rgb(${newColor.r},${newColor.g},${newColor.b})`
}

button.addEventListener("click", changeColor)