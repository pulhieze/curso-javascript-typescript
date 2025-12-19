// Factory function (Função fábrica)

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }, 

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(" ");
            this.nome = valor.shift();
            this.sobrenome = valor.join(" ");
        },

        fala: function (assunto = "sobre nada") {
            return `${this.nome} está falando ${assunto}`;
        },
        altura: altura,
        peso: peso,
        // Getter - transforma um metodo em função
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa("Vinicius", "Mello", 1.70, 72);
console.log(`Nome: ${p1.nomeCompleto}\nAltura: ${p1.altura}\nPeso: ${p1.peso}\nIMC: ${p1.imc}\n`);

const p2 = criaPessoa("Fernando", "Ferreira", 2.00, 100);
console.log(`Nome: ${p2.nomeCompleto}\nAltura: ${p2.altura}\nPeso: ${p2.peso}\nIMC: ${p2.imc}\n`);