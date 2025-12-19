// if pode ser usado sozinho
// else e else if não pode ser usado sozinho
// Eu posso ter quantos else ifs na checagem
// Só posso ter um else na checagem

let hora = 28;

if (hora >= 0 && hora < 12){
    console.log('Bom dia!');
}
else if (hora >= 12 && hora < 18){
    console.log('Boa tarde!');
}
else if (hora >= 18 && hora <= 23){
    console.log('Boa noite!');
}
else{
    console.log('Olá')
}