// RETURN retorna um valor de uma função
// Finaliza a função

function soma(a, b){ // Esta função retorna a soma de "a" e "b"
    return a + b;
}

console.log(soma(4, 6));

// =============================================

function soma2(a, b){ // Esta função não está retornando nenhum valor
    console.log(a + b); // Neste caso em específico essa função é inutil, porém poderia ser utilizada em outra ocasião 
}

soma2(7,4);

// =============================================

function criaPessoa(nome, sobrenome, idade) { // Essa função cria um objeto pessoa
    let pessoa = {
        nome: nome, // Parâmetros do objeto
        sobrenome: sobrenome,
        idade: idade
    };

    return pessoa; // retorna o objeto pessoa
}

let pessoa1 = criaPessoa("Vinicius", "Pulhiese", 21); // Criando uma pessoa através do objeto retornado
let pessoa2 = criaPessoa("Leandro", "Ribeiro", 34);

console.log(pessoa1);
console.log(pessoa2);

// =============================================

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + " " + resto;
    }

    return falaResto;
}

const falaComeco = falaFrase("Olá");
const falaResto = falaComeco("Mundo!!");

console.log(falaResto);

// =============================================

function criaMultiplicador (multiplicador) {
    // multiplicador está nesse escopo
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(5));
console.log(triplica(5));
console.log(quadriplica(5));