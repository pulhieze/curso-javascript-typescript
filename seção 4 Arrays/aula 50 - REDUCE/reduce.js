// Serve para reduzir o array a um único valor (ou estrutura).
// Some todos os números (Reduce)
// Retorne um array com pares (Filter)
// Retorne um array com o dobro dos valores(Map)

const numeros = [54, 3, 45, 12, 22, 40, 9, 87, 2, 5, 8];

const numerosPares = numeros.filter((valor) => {
    return valor % 2 === 0;
});

const numerosDobro = numeros.map((valor) => {
    return valor * 2;
});

const somaNumeros = numeros.reduce((valor, soma) => {
    return soma + valor;
});

console.log(numerosPares);
console.log(numerosDobro);
console.log(somaNumeros);
