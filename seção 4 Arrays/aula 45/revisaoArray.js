//                 0           1           2         3        4         5
const nomes = ["Vinicius", "Leandro", "Fernando", "Marta", "Paula", "Arnaldo"]
nomes.push("João"); // adiociona um item no final do array
nomes.unshift("Felipe"); // adiciona um item no inicio do array
console.log(nomes);
nomes.pop(); // remove o ultimo item do array
console.log(nomes);
nomes.shift(); // remove o primeiro item do array
console.log(nomes); 

const novo = nomes.slice(1,3);
console.log(novo)

const nome = "Vinicius Pulhiese de Mello";
const newNomes = nome.split(' '); // Converte uma string em um array
console.log(newNomes);