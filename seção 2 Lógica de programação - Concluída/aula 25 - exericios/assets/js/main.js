const paragrafos = document.querySelector('.paragrafos'); // Esta puxando a div paragrafos
const ps = paragrafos.querySelectorAll('p'); // Dentro da div, essa linha puxa todos os paragrafos

const estilosBody = getComputedStyle(document.body); // puxa a estilização da tag body

const backgroundColorBody = estilosBody.backgroundColor; 
console.log(backgroundColorBody);


for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = "white"; // Troca a cor da letra para branco
}

