function switchCaseData(){

    function zeroAEsquerda(num){
        return num >= 10 ? num : `0${num}`;
    }

    let resultado = document.querySelector('.resultado');
    let data = new Date();
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()+1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const diaDaSemana = data.getDay();

    
    console.log(diaDaSemana);
    switch(diaDaSemana){
        case 0:
            resultado.innerHTML = `Domingo, ${dia}/${mes}/${ano}, ${hora}:${minuto}`;
            break;
        case 1:
            resultado.innerHTML = `Segunda-Feira, ${dia}/${mes}/${ano}, ${hora}:${minuto}`;
            break;
        case 2:
            resultado.innerHTML = `Terça-Feira, ${dia}/${mes}/${ano}, ${hora}:${minuto}`;
            break;
        case 3:
            resultado.innerHTML = `Quarta-Feira, ${dia}/${mes}/${ano}, ${hora}:${minuto}`;
            break;
        case 4:
            resultado.innerHTML = `Quinta-Feira, ${dia}/${mes}/${ano}, ${hora}:${minuto}`;
            break;
        case 5:
            resultado.innerHTML = `Sexta-Feira, ${dia}/${mes}/${ano}, ${hora}:${minuto}`;
            break;
        case 6:
            resultado.innerHTML = `Sábado, ${dia}/${mes}/${ano}, ${hora}:${minuto}`;
            break;
    }

}
switchCaseData();