function meuEscopo() {
    const form = document.querySelector('.form'); // usado para puxar um elemento com base na classe ou tag
    const resultado = document.querySelector('.resultado') // puxando o elemento da div, com classe nomeado resultado

    const arrayPessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        arrayPessoas.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura,
        });
        resultado.innerHTML += `
        <h3>Nome: ${nome}</h3>
        <h3>Sobrenome: ${sobrenome}</h3>
        <h3>Peso: ${peso}</h3>
        <h3>Altura: ${altura}</h3>
        `
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();


    // Método antigo. Pouco utilizado
    // ==========================================================================================================================
    // form.onsubmit = function(evento){
    //     evento.preventDefault(); // essa função cancela o envento, qualquer ação que seria executada normalmente, não ocorrerá
    //     alert('Formulário enviado');
    //     console.log('Foi enviado');
    // };
    // ==========================================================================================================================
