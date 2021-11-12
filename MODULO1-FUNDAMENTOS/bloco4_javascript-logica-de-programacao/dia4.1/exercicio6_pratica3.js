// 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
/* let peca = "bispo";

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
} */

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
/* let percent = -25;

if (percent < 0 || percent > 100) {
    console.log("Erro! Conceito inválido!");
  } else if (percent >= 90){
    console.log("Conceito A");
  } else if (percent >= 80){
    console.log("Conceito B");
  } else if (percent >= 70){
    console.log("Conceito C");
  } else if (percent >= 60) {
    console.log("Conceito D");
  } else if (percent >= 50) {
    console.log("Conceito E");
  } else {
    console.log("Conceito F");
} */

// 8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
/* const num1 = 2;
const num2 = 3;
const num3 = 5;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
  console.log(true);
} else {
  console.log(false);
} */

// 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
const num1 = 7;
const num2 = 4;
const num3 = 8;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
  console.log(true);
} else {
  console.log(false);
}