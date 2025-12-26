let numeroEscolhido = Number(prompt("Digite um numero: "));
let numeroTitulo = document.getElementById("numero-titulo");
let texto = document.getElementById("texto");

numeroTitulo.innerHTML = numeroEscolhido;
texto.innerHTML = `
<p>Raiz quadrada é: ${numeroEscolhido ** 0.5}</p>
<p>${numeroEscolhido} é inteiro: ${Number.isInteger(numeroEscolhido)}</p>
<p>${numeroEscolhido} é NaN: ${Number.isNaN(numeroEscolhido)}</p>
<p>Arredondado para baixo: ${Math.floor(numeroEscolhido)}</p>
<p>Arredondado para cima: ${Math.ceil(numeroEscolhido)}</p>
<p>Com duas casas decimais: ${numeroEscolhido.toFixed(2)}</p>
`;