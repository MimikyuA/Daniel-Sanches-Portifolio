const teclado = document.querySelector('.teclado');
let palavraSecreta = '';
let tentativas = 6
const img = document.querySelector('.imagem');
const letrasCorretas = [];
let palavraEmFormacao = '';

teclado.addEventListener('click', (event) => {
    if (!event.target.classList.value.includes('.teclado')){
        event.target.style.backgroundColor = 'red';
        const letra = event.target.textContent;
        if (palavraSecreta.includes(letra)) {
            event.target.style.backgroundColor = 'green';
            letrasCorretas.push(letra)
        } else {
            tentativas = tentativas - 1;
        }
        if (tentativas === 6) {
            img.setAttribute('src', './img/robo_forca_0.png');
        } else if (tentativas === 5) {
            img.setAttribute('src', './img/robo_forca_1.png');
        } else if (tentativas === 4) {
            img.setAttribute('src', './img/robo_forca_2.png');
        } else if (tentativas === 3) {
            img.setAttribute('src', './img/robo_forca_3.png');
        } else if (tentativas === 2) {
            img.setAttribute('src', './img/robo_forca_4.png');
        } else if (tentativas === 1) {
            img.setAttribute('src', './img/robo_forca_5.png');
        } else if (tentativas === 0) {
            img.setAttribute('src', './img/robo_forca_6.png');
            alert(`Você errou, parabens! A palavra era ${palavraSecreta}`);
        };
        exibirPalavra()
    };
});

const inputPalavraSecreta = document.querySelector('.input-palavra-secreta');
const inputDica = document.querySelector('.input-dicas');
const dica = document.querySelector('.dica');
const botaoIniciar = document.querySelector('.botao-iniciar');
botaoIniciar.addEventListener('click', (event) => {
    palavraSecreta = inputPalavraSecreta.value.toUpperCase();
    dica.textContent = inputDica.value;
    exibirPalavra();
    inputDica.value = '';
    inputPalavraSecreta.value = '';
});

const saidaPalavraSecreta = document.querySelector('.palavra-secreta');
function exibirPalavra(){
    palavraEmFormacao = '';
    for (letra in palavraSecreta) {
        if (letrasCorretas.includes(palavraSecreta[letra])) {
            palavraEmFormacao = palavraEmFormacao + ' ' + palavraSecreta[letra] + ' ';
        } else {
            palavraEmFormacao = palavraEmFormacao + '_';
        };
    };
    saidaPalavraSecreta.textContent = palavraEmFormacao;
    
    // Verificar se todas as letras da palavra secreta estão corretas
    if (palavraSecreta.split('').every(letra => letrasCorretas.includes(letra))) {
        alert("Parabéns! Você ganhou!");
        reiniciarJogo();
    }
};

function reiniciarJogo() {
    palavraSecreta = '';
    tentativas = 6;
    letrasCorretas.length = 0;
    palavraEmFormacao = '';
    img.setAttribute('src', './img/robo_forca_0.png');
    saidaPalavraSecreta.textContent = '';
}