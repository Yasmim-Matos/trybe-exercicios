// 1. Ordene o array numbers em ordem crescente e imprima seus valores;

// let numbers = [5, 9, 3];

/* for (let index = 1; index < numbers.length; index += 1) {
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
  console.log(numbers); */

// Source da explicação: https://www.youtube.com/watch?v=ZYO43bi0IXY

// 2. Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers); */

// 3. Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. 
let newArr = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (index < numbers.length - 1) {
    let multiplica = numbers[index] * numbers[index + 1];
    newArr.push(multiplica);
  } else {
    let multiplica2 = numbers[index] * 2;
    newArr.push(multiplica2);
  }
}
console.log(newArr);