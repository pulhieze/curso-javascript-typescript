// Função construtora cria objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, idade, peso) {
    const ID = 123456;

    const metodoInterno = function() {
        console.log("Método interno");
    };

    this.nome = nome;
    this.idade = idade;
    this.peso = peso;

    this.metodo = function() {
        console.log(`${this.nome} | ${this.idade} | ${this.peso}`);
    };
}

const pessoa1 = new Pessoa("Vinicius", 21, 72);
pessoa1.metodo();
