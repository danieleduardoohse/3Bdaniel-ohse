// Define as cores do gradiente
var cor1 = "#8b0089";
var cor2 = "#1e00ff";
var cor3 = "#44ff00";

// Inicializa uma variável para controlar o estado atual do gradiente
var alternarCor = true;

// Adiciona um ouvinte de evento para o clique no botão
document.getElementById("botao").addEventListener("click", function() {
    // Obtém o elemento do corpo
    var body = document.getElementById("corpo");

    // Gera um número aleatório entre 0 e 1
    var randomNumber = Math.random();

    // Define as cores do gradiente com base no número aleatório gerado
    if (randomNumber < 0.5) {
        body.style.background = "linear-gradient(" + cor1 + ", " + cor2 + "," + cor3 +")";
    } else {
        body.style.background = "linear-gradient(" + cor3 +", " + cor2 + ", " + cor1 +")";
    }
});