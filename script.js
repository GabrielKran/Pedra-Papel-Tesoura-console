function getComputadorescolha() {
    return Math.floor(Math.random() * 3) + 1

}

function getHumanEscolha () {
    let entrada = parseInt(prompt("Digite 1 para Pedra, 2 para Papel e 3 para Tesoura: "))
    return entrada
}

let humanScore = 0
let computadorScore = 0

function playRound() {
    for (let i = 1; i <= 5; i++) {
        let hc = getHumanEscolha()
        let cc = getComputadorescolha()

        if (hc === 1 && cc === 3 || hc === 2 && cc === 1 || hc === 3 && cc === 2) {
            humanScore ++
            console.log(`Você ganhou!!\n${humanScore} x ${computadorScore}`)
            
        } else if (cc === 1 && hc === 3 || cc === 2 && hc === 1 || cc === 3 && hc === 2) {
            computadorScore ++
            console.log(`A máquina ganhou..\n${humanScore} x ${computadorScore}`)

        } else if (hc === 1 && cc === 1 || hc === 2 && cc === 2 || hc === 3 && cc === 3) {
            console.log(`Empate\n${humanScore} x ${computadorScore}`)

        }
    }

    if (humanScore > computadorScore) {
        console.log(`Parabéns, você venceu com ${humanScore} pontos!!`)
        alert(`Parabéns, você venceu com ${humanScore} pontos!!`)
    } else {
        console.log(`À máquina te venceu com ${computadorScore} pontos..`)
        alert(`Parabéns, você venceu com ${computadorScore} pontos!!`)
    }
}

playRound()