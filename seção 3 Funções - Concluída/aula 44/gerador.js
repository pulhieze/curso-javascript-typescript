function* gerador(){
    yield "Valor 1";
    yield "Valor 2";
    yield "Valor 3";
}

function* gerador2() {
    let i = 0;

    while (true){
        yield i;
        i++;
    }
}

function* gerador3() {
    yield 0;
    yield 1;
    yield 2;
    yield 3;
}

function* gerador4() {
    yield* gerador3();
    yield 4;
    yield 5;
    yield 6;
}

const gera4 = gerador4();
for (let valor of gera4) {
    console.log(valor);
}

function* gerador5() {
    yield function() {
        console.log("Vim do yield 1");
    }

    return function() {
        console.log("vim do return");
    }

    yield function() {
        console.log("Vim do yield 2");
    }
}

const gera5 = gerador5();
const func1 = gera5.next().value;
const func2 = gera5.next().value;

func1();
func2();