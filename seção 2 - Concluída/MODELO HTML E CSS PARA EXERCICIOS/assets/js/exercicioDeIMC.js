function calcularIMC(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function pegarEventoDeSubmit(evento){
        evento.preventDefault();
        let peso = document.getElementById('peso').value;
        let altura = document.getElementById('altura').value;
        

        if (peso === '' || altura === '' || isNaN(peso) || isNaN(altura)){
            resultado.innerHTML = `
            <p style="color: rgb(255, 50, 50)">Dados não inseridos</p>`
            return;
        }

        peso = parseFloat(peso);
        altura = parseFloat(altura);

        const imc = peso / (altura**2);

        if (imc < 18.5){
            console.log(imc);
            resultado.innerHTML = `
            <p style="color: rgb(75, 179, 54, 1)">Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)
            `
        }
        else if (imc >= 18.5 && imc < 25){
            resultado.innerHTML = `
            <p style="color: rgb(75, 179, 54, 1)">Seu IMC é ${imc.toFixed(2)} (Peso normal)
            `
        }
        else if (imc >= 25 && imc < 30){
            console.log(imc);
            resultado.innerHTML = `
            <p style="color: rgb(75, 179, 54, 1)">Seu IMC é ${imc.toFixed(2)} (Sobrepeso)
            `
        }
        else if (imc >= 30 && imc < 35){
            console.log(imc);
            resultado.innerHTML = `
            <p style="color: rgb(75, 179, 54, 1)">Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)
            `
        }
        else if (imc >= 35 && imc < 40){
            console.log(imc);
            resultado.innerHTML = `
            <p style="color: rgb(75, 179, 54, 1)">Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)
            `
        }
        else if (imc > 40){
            console.log(imc);
            resultado.innerHTML = `
            <p style="color: rgba(75, 179, 54, 1)">Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)
            `
        }
    
    }
    form.addEventListener('submit', pegarEventoDeSubmit);
    form.addEventListener('reset', () => {
        resultado.innerHTML = '';
    })
}
calcularIMC();