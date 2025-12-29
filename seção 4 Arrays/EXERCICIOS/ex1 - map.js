const numeros = [23, 56, 12];
const frutas = ["Maçã", "Banana", "Morango", "Açaí"];

const frutasLength = frutas.map((obj) => {
    return obj.length;
});

const arrayDobrado = numeros.map((valor) => {
    return valor * 2;
});

const converteString = numeros.map((valor) => {
    return valor.toString();
});

const numerosFarenheit = numeros.map((valorEmC, valorEmF) => {
    return valorEmF = valorEmC * 1.8 + 32;
});

console.log(arrayDobrado, "Dobro dos numeros");
console.log(converteString, "Numeros em String");
console.log(frutasLength, "Quantidade de letras");
console.log(numerosFarenheit, "Conversão para farenheit");