function getComputadorEscolha() {
    let escolhas = ["pedra", "papel", "tesoura"];
    return escolhas[Math.floor(Math.random() * escolhas.length)];
}

let playerScore = 0
let computadorScore = 0

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.innerHTML);
        playRound(button.innerHTML.toLowerCase());
    })
})

function desabilitandoBotao() {
    buttons.forEach(element => {
        element.disabled = true;
    })
}

function playRound(playerEscolha) {
    let computadorEscolha = getComputadorEscolha();
    let resultEmbate = "";
    
    if (playerEscolha === "pedra" && computadorEscolha === "tesoura" ||
        playerEscolha === "papel" && computadorEscolha === "pedra" ||
        playerEscolha === "tesoura" && computadorEscolha === "papel") {
            
            playerScore ++;
            resultEmbate = `Você venceu! ${playerEscolha} vence ${computadorEscolha}<br><br>
            Pontuação do jogador = ${playerScore}<br>
            Pontuação do computador = ${computadorScore}`;
            
        } else if (playerEscolha === computadorEscolha) {
            resultEmbate = `Empate! Vocês dois escolheram ${playerEscolha}<br><br>
            Pontuação do jogador = ${playerScore}<br>
            Pontuação do computador = ${computadorScore}`;
            
        } else {
            computadorScore ++;
            resultEmbate = `Você perdeu! ${computadorEscolha} vence ${playerEscolha}<br><br>
            Pontuação do jogador = ${playerScore}<br>
            Pontuação do computador = ${computadorScore}`;
            
        }
        document.querySelector("#result-embate").innerHTML = resultEmbate;
    
    if (playerScore === 5 || computadorScore === 5) {
        let resultFinal = playerScore === 5
            ? `Você venceu o jogo! Recarregue a página para jogar novamente`
            : `Você perdeu o jogo! Recarregue a página para jogar novamente`;
            document.querySelector("#result-final").innerHTML = resultFinal;
            desabilitandoBotao();
    }
}