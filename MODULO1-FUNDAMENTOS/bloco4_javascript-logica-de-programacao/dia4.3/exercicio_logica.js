// 1. Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n 
// Saída:
/* n = 5
*****
*****
*****
*****
***** */
/* 
let n = 5;
let contLinha = '';
for (let linha = 0; linha < n; linha += 1) {
    contLinha += '*';
}
console.log(contLinha); */

/*
let n = 5;
let preencheLinha = '';
let simbolo = '+';

for (let coluna = 0; coluna < n; coluna += 1) {
    preencheLinha += simbolo;
}
for (let linha = 0; linha < n; linha += 1) {
    console.log(preencheLinha);
} */

// 2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
// Saída:
/* n = 5
*
**
***
****
***** */

/* let n = 5;
let preencheLinha = '';
let simbolo = '+';

for (let linha = 0; linha <= n; linha += 1){
    console.log(preencheLinha);
    preencheLinha += simbolo;   
} */

// 3. Inverta o lado do triângulo
// Saída:
/* n = 5
    *
   **
  ***
 ****
***** */

let n = 5;
let preencheLinha = '';
let simbolo = '+';

for (let linha = 0; linha <= n; linha += 1){
    console.log(preencheLinha);
    preencheLinha += simbolo;   
}