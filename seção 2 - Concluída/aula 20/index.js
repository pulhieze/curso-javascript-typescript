const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Pulhiese',
    idade: 21,
    endereco: {
        rua: 'Anne Gários',
        bairro: 'Bom Clima',
        numero: 200
    }
}

//atribuição via desestruturação
const {endereco: {rua, numero}} = pessoa;

console.log(rua, numero);