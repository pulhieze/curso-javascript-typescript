const nome = 'Arce';

function falaNome() {
    const nome = "Vinicius"; // essa variavel sobrescreve a variavel global
    console.log(nome);
}

function usaFalaNome() {
    falaNome();
}

usaFalaNome();