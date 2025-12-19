function retornarHora(data){
    if ( data && !(data instanceof Date)){
        throw new TypeError("Esperando instância de Date.");
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

try {
    const data = new Date('04-23-2021 14:23:45');
    let hora = retornarHora();
    console.log(hora);
} catch(e) {

} finally {
    console.log("Morra");
}
