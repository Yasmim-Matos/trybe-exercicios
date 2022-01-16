/* 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .
*/

function indexMinNumber(array) {
    let indexMin = 0;

    for (let number in array) {
        if (array[number] < array[indexMin]) {
            indexMin = number;
        }
    }
    return indexMin;
}

console.log(indexMinNumber([2, 4, 6, 7, 10, 0, -3]));
