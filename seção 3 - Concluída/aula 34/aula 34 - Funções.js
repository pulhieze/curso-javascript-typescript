// Declaração de função (Function hoisting)
function falaOi(){ 
    console.log("oi");
}
falaOi();

// First-class objects (Objetos de primeira classe)
// Function expression
const seFoda = function () {
    console.log("Sou um dado");
}

function qualquer(funcao) {
    funcao();
}
qualquer(seFoda);

// Arrow Function
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
}

funcaoArrow();

// Dentro de um objeto
const objeto = {
    falar: function () {
        console.log("Estou falando");
    }
}
objeto.falar();