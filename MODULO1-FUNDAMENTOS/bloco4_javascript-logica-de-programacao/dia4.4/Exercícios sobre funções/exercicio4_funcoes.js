/* 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .

*/

function biggestName(array) {
    let bigName = array[0];

    for (let name of array) {
        if (name.length > bigName.length) {
            bigName = name;
        }
    }
    return bigName;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
