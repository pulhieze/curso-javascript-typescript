function retornarHora(){
    let data = new Date();
    return data.toLocaleTimeString("pt-BR", {
        hour12: false
    });
}


const timer = setInterval(function() {
    console.log(retornarHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 5000);