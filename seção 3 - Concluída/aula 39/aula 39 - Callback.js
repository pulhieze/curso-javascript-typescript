function rand(min = 1000, max = 3000) { // Função que randomiza um numero de 1000 a 3000
    const numRandom = Math.random() * (max - min) + min;
    return Math.floor(numRandom); // Retorna numero randomizado
}

function f1(callback) { // é Passado o parametro callback
    setTimeout(function () { 
        console.log("f1");
        if (callback) callback(); // Caso exista callback executa a função callback
    }, rand());
}

function f2(callback) {
    setTimeout(function () {
        console.log("f2");
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log("f3");
        if (callback) callback();
    }, rand());
}

f1(f1Callback());

function f1Callback() {
    f2(f2Callback());
}

function f2Callback() {
    f3(f3Callback());
}

function f3Callback() {
    console.log("m4<4<0");
}
