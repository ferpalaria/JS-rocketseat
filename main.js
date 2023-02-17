const randomNumber = Math.round(Math.random() * 10)
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let xAttempts = 1

// função callback
function handleTryClick(event) {
    // para não tentar enviar os dados do form (pq o botão está dentro do form)
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    console.log(randomNumber)

    if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        // Alternativa reaproveitando a variável 
        screen2.querySelector("h2").innerHTML =
            `Acertou em ${xAttempts} tentativas`
    }

    xAttempts++
}

// Função callback
btnTry.addEventListener('click', handleTryClick)

// Com função anonima
btnReset.addEventListener('click', function () {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")

    xAttempts = 1
})

function toggleScreen() {
    
}


