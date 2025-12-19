resultado = document.querySelector('.container h1');
data = new Date();
resultado.innerHTML = data.toLocaleDateString('pt-BR', {dataStyle: 'full', timeStyle: 'short'});