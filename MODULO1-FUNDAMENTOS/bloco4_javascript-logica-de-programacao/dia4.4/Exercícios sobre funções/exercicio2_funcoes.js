/* 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .

*/

function indexMaxNumber(array) {
    let maxNumber = array[0];
    let index = 0;

    for (let number in array) {
        if (array[number] > maxNumber) {
            maxNumber = array[number];
            index = number;
        }
    }
    return index;
}

console.log(indexMaxNumber([2, 3, 6, 7, 10, 1]));
