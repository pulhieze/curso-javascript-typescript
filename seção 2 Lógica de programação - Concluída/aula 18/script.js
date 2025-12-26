const verdadeira = true;

// let tem escopo de bloco {... bloco}
// var só tem escopo de função

let nome = 'Vinicius'; // criando
var nome2 = 'Luiz';

if (verdadeira){
    let nome = 'Otavio'; // criando
    console.log(nome,nome2);

    if (verdadeira){
        let nome = 'Eduardo';
        console.log(nome);
    }
}
console.log(nome,nome2);