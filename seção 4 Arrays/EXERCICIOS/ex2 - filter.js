const numeros = [12, 64, 91, 34, 11, 17, 32];
const nomes = ["Vinicius", "Felipe", "Jose", "Marciliano", "Dudu"];
const pessoas = [
    {nome: "Felipe", idade: 20},
    {nome: "Francine", idade: 17},
];

const produtos = [
    {produto: "Teclado", preco: 150},
    {produto: "Mouse", preco: 90},
    {produto: "Headset", preco: 200},
    {produto: "Mousepad", preco: 30},
    {produto: "Monitor", preco: 550}
];

const apenasPares = numeros.filter((valor) => {
    return valor % 2 === 0;
});

const maioresQueVinte = numeros.filter((valor) => {
    return valor > 20;
});

const quantidadeLetras = nomes.filter((valor) => {
    return valor.length > 5;
});

const maioresDeIdade = pessoas.filter((objeto) => {
    return objeto.idade >= 18;
});

const comparaPrecos = produtos.filter((objeto) => {
    return objeto.preco > 120;
})

console.log(apenasPares, "Apenas numeros pares");
console.log(maioresQueVinte, "Numeros maiores que vinte");
console.log(quantidadeLetras, "Quantidade de letras maiores que 5");
console.log(maioresDeIdade, "Maiores de idade");
console.log(comparaPrecos, "Produtos acima de 120");