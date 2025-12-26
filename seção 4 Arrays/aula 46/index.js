//              -5        -4       -3        -2        -1
//               0         1        2         3         4
const nomes = ["Maçã", "Banana", "Limão", "Morango", "Manga"];

// nomes.splice(indice, delete, ele1, ele2, ele3)

const removidos = nomes.splice(0, 3);
console.log(nomes, removidos);