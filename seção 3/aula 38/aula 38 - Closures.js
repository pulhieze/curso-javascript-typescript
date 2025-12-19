function retornaFuncao () {
    const nome = "Vinicius";
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao);