(function (idade, peso, altura) {
    const sobrenome = "Pulhiese";
    function criaNome(nome) {
        return nome + " " + sobrenome;
    }

    function falaNome() {
        console.log(criaNome("Vinicius"));
    }

    falaNome();
    console.log(idade, peso, altura);
    
})(21, 72, 1.70);

const nome = "MACACO";