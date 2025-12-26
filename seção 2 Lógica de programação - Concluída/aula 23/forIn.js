// for in lê os indices ou chaves do objeto

// const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Morango'];

// for (let fruta in frutas){
//     console.log(frutas[fruta]);
// }

const pessoa = {
    nome: 'Vinicius',
    idade: 21,
    profissao: 'Programador'
}

for (let key in pessoa){
    console.log(pessoa[key]);
}