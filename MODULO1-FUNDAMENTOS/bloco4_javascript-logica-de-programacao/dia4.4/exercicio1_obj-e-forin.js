let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

/* 1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: 
    Bem vinda, Margarida
*/

function saudacao (nome) {
    return console.log(`Bem vinda, ${nome}`);
}
saudacao(info.personagem);

const dandoOla = 'Bem vinda, ' + info['personagem'];
console.log(dandoOla);
