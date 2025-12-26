// arguments sustenta todos os argumentos

function funcao1(a, b, c, d, e, f){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }

    console.log(total);
}

funcao1(1, 2, 3, 4, 5, 6, 7);


// ====================================

function funcao2(a, b, c, d, e, f){
    console.log(a,b,c,d,e,f);
}

funcao2(1, 2, 3);

// =====================================

function funcao3(a, b){
    b = b || 0;
    console.log(a + b);
}
funcao3(2);

// =====================================

function funcao4({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);

}
funcao4({nome: "Vinicius", sobrenome: "Pulhiese", idade: 21});

// ======================================

function funcao5([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);

}
let obj = [12, 66, 45]
funcao5(obj);

// ======================================

function conta(operador, acumulador, ...numeros){
    //console.log(operador, acumulador, numeros);
    for (let numero of numeros){
        if(operador === "+") acumulador += numero;
        if(operador === "-") acumulador -= numero;
        if(operador === "*") acumulador *= numero;
        if(operador === "/") acumulador /= numero;
    }

    console.log(acumulador);

}
conta("+", 230, 20, 30, 40, 50)