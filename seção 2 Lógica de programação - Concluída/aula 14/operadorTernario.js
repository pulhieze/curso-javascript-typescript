// ? :

const pontuacaoUsuario = 1199;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario, corPadrao);