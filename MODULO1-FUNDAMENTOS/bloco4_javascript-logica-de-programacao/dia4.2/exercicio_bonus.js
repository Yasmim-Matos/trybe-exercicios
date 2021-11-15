// 1. Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3];

for (let index = 1; index < numbers.length; index += 1) {
  //O primeiro for vai controlar o limite da posição final a ser percorrida, pois cada volta do laço for o número maior vai para o final do par comparado e já fica ordenado
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      //O segundo for fará as comparações dos elementos em pares
      if (numbers[index] < numbers[secondIndex]) {
        //Se o primeiro elemento (secondIndex) de cada par for maior que o segundo (index) acontece a troca dos elementos
        let position = numbers[index]; // a variável position vai receber o menor número do par
        numbers[index] = numbers[secondIndex]; // o menor número vai ser substituido pelo maior número e colocado na posição onde o menor número estava
        numbers[secondIndex] = position; // o maior número vai ser substituido pelo menor na posição onde o maior estava
      }
    }
  }
  console.log(numbers);

// Source da explicação: https://www.youtube.com/watch?v=ZYO43bi0IXY

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];