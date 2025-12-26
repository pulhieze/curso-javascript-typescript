function ePaisagem(largura, altura){
    if (largura > altura){
        return `Esta imagem está no modo paisagem`;
    }
    else{
        return `Esta imagem está no modo retrato`;
    }
}

console.log(ePaisagem(1080, 1920));