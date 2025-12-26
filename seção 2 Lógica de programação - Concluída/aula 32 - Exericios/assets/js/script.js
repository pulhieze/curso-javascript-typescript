let relogio = document.querySelector('.relogio');
let iniciar = document.querySelector('.iniciar');
let parar = document.querySelector('.parar');
let zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;


function pegandoHora(segundos){
    let data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: "UTC"
    });
}

function iniciarContador(){
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = pegandoHora(segundos);
    }, 1000);

}

function pararContador(){
    clearInterval(timer);
}

function zerarContador(){
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
}

iniciar.addEventListener("click", function(){
    clearInterval(timer);
    iniciarContador();
});

parar.addEventListener("click", function(){
    pararContador();
});

zerar.addEventListener("click", function(){
    zerarContador();
})