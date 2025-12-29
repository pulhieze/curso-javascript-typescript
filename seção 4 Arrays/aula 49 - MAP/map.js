// // Dobre os numeros
// const numeros = [54, 3, 45, 12, 22, 40, 9, 87, 2, 5, 8];

// const numerosEmDobro = numeros.map((valor) => {
//   return valor * 2; 
// });

// console.log(numerosEmDobro);


const pessoas = [
    {nome: "Vinicius", idade: 21},
    {nome: "Marcio", idade: 11},
    {nome: "Felipe", idade: 68},
    {nome: "Fernanda", idade: 56},
    {nome: "Paula", idade: 18},
    {nome: "Aloísio", idade: 2},
];

const nomes = pessoas.map((obj) => {
    return obj.nome;
});

const idade = pessoas.map((obj) => {
    return { idade: obj.idade };
});

const ids = pessoas.map((obj, indice) => {
    obj.id = (indice + 1) * 1000;
    return obj;
})

console.log(ids);
