// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome, sobrenome, idade
//     }
// }

// const pessoa1 = criaPessoa('Vinicius', 'Pulhiese', 21);
// console.log(pessoa1);

const pessoa1 = {
    nome: 'Vinicius',
    sobrenome: 'Pulhiese',
    idade: 21,

    fala(){
        console.log(`Nome: ${this.nome}\nSobrenome: ${this.sobrenome}\nIdade: ${this.idade}\n`);
    },

    incrementaIdade(){
        ++this.idade;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();