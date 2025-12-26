const elementos = [
    {tag: 'p', texto: 'Meu nome é Vinicius'},
    {tag: 'div', texto: 'Eu gosto de hamburguer'},
    {tag: 'footer', texto: 'Gosto de treinar'},
    {tag: 'section', texto: 'Gosto de fazer nada :)'},
];

const container = document.querySelector('.container'); // seleciona o container
const div = document.createElement('div'); // cria um elemento div

for (let i = 0; i < elementos.length; i++){ // iteração
    let { tag, texto } = elementos[i]; // desestrutura o array elementos
    let tagCriada = document.createElement(tag); // Cria um elemento tag
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);
