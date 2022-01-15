let infoMargarida = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

infoMargarida['recorrente'] = 'Sim';

/* 5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console: 

Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!

*/

let infoPatinhas = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
};

infoPatinhas['recorrente'] = 'Sim';

for (let key in infoMargarida && infoPatinhas) {
    if (key === 'recorrente' && infoMargarida[key] === 'Sim' && infoPatinhas[key] === 'Sim') {
        console.log('Ambos recorrentes');
    } else {
        console.log(infoMargarida[key] + ' e ' + infoPatinhas[key]);
    }
}
