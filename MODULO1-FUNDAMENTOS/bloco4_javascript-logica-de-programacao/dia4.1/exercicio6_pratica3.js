// 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let peca = "bispo";

if (peca.toLowerCase() === "peao" ) {
    console.log("A peça", peca, "se move para frente ou 1 casa na diagonal");
} else if (peca.toLowerCase() === "bispo") {
    console.log("A peça", peca, "se move na diagonal");
} else if (peca.toLowerCase() === "torre") {
    console.log("A peça", peca, "se move em linha reta horizontalmente ou verticalmente");
} else if (peca.toLowerCase() === "cavalo") {
    console.log("A peça", peca, "se move formando um L");
} else if (peca.toLowerCase() === "rei") {
    console.log("A peça", peca, "se move em qualquer direção apenas uma casa ao redor dele");
} else if (peca.toLowerCase() === "rainha") {
    console.log("A peça", peca, "se move para todas as direções");
} else {
    console.log("Peça inválida");
}

/* Outra forma de fresolver o mesmo problema
const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};
*/

// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. 
let percent = 0;

