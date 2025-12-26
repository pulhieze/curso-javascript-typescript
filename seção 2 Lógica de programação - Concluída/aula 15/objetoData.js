// // const tresHoras = 60 * 60 * 5 * 1000;
// // const umDia = 60 * 60 * 24 * 1000
// // const data = new Date(0 + tresHoras + umDia);

// const data = new Date('2019-05-20 20:30:45');
// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth());
// console.log('Ano', data.getFullYear());


// console.log(data.toString()); 

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function dataFormatada (data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()+1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundo}`;
}

const data = new Date();
const dataBrasil = dataFormatada(data);
console.log(dataBrasil);