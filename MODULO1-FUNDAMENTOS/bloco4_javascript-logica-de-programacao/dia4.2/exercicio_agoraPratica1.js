// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Percorra o array imprimindo todos os valores nele contidos com a função console.log()
/* for (let number of numbers){
    console.log(number);
}

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
} */

//---------------------------------------------------------------------------------------------------

// 2. Some todos os valores contidos no array e imprima o resultado
/* let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}
console.log(sum); 

for (let sum of numbers) {
    sum += numbers;
}
console.log(sum); */

//---------------------------------------------------------------------------------------------------

// 3. Calcule e imprima a média aritmética dos valores contidos no array
/* let sum = 0;
let media = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        sum += numbers[index];
    }
media = sum / numbers.length;
console.log(media); */

//---------------------------------------------------------------------------------------------------

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

/* let sum = 0;
let media = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        sum += numbers[index];
    }
media = sum / numbers.length;

//console.log(media);

if (media > 20) {
    console.log('Valor maior que 20, pois a média final ficou igual a: ', media);
} else {
    console.log('Valor menor ou igual a 20, pois a média final ficou igual a: ', media);
} */

//---------------------------------------------------------------------------------------------------

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorValor = numbers[0];
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > maiorValor){
        maiorValor = numbers[index];
    }
}
console.log (maiorValor); */

//---------------------------------------------------------------------------------------------------

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let qtdOdd = 0;
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0){
        qtdOdd += 1;
    }
}
if (qtdOdd > 0){
    console.log(qtdOdd);
} else {
    console.log("Nenhum valor ímpar encontrado");
} */

//---------------------------------------------------------------------------------------------------

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorValor) {
        menorValor = numbers[index];
    }
}
console.log(menorValor); */

//---------------------------------------------------------------------------------------------------

// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado
/* let arr25 = [];
for (let index = 1; index <= 25; index += 1) {
    arr25.push(index);
}
console.log(arr25); */

//---------------------------------------------------------------------------------------------------

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 

let arr25 = [];
for (let index = 1; index <= 25; index += 1) {
    arr25.push(index);
}
console.log(arr25);

for (let index = 1; index < arr25.length; index += 1) {
    console.log(arr25[index] / 2);
}
