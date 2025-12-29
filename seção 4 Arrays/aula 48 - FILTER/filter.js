// Serve para filtrar elementos com base em uma condição.

// Retorne os números maiores que 10
const numeros = [54, 3, 45, 12, 22, 40, 9, 87, 2, 5, 8];

const numerosFiltradoas = numeros.filter((valor) => {
    return valor > 10; // <- Condição
});
console.log(numerosFiltradoas);


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 30 anos
// Retorne as pessoas cujo o nome termina com a

const pessoas = [
    {nome: "Vinicius", idade: 21},
    {nome: "Marcio", idade: 11},
    {nome: "Felipe", idade: 68},
    {nome: "Fernanda", idade: 56},
    {nome: "Paula", idade: 18},
    {nome: "Aloísio", idade: 2},
];

const nomeMaior = pessoas.filter((valor) => {
    return valor.nome.length > 7;
});

const idadeFiltrada = pessoas.filter((valor) => {
    return valor.idade > 30;
});

const terminaComA = pessoas.filter((valor) => {
    return valor.nome.toLowerCase().endsWith('a');
})

console.log(nomeMaior);
console.log(idadeFiltrada);
console.log(terminaComA);