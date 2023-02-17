const randomNumber = Math.round(Math.random() * 10)
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', resetClick)


function handleTryClick(event) {
    event.preventDefault()  // para não tentar enviar os dados do form (pq o botão está dentro do form)

    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()

        screen2.querySelector("h2").innerHTML =
            `Acertou em ${xAttempts} tentativas`
    }

    xAttempts++
}


function resetClick() {
    toggleScreen()
    xAttempts = 1
}

function toggleScreen() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
}


