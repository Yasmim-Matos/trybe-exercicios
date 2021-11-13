// 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

/* const costProduct = 2; //custo do produto
const saleValue = 5; // valor de venda

if (costProduct >= 0 && saleValue >= 0) {
    const totalCost = costProduct * 1.2; // calculo do imposto de 20% sobre o produto
    const totalProfit = (saleValue - totalCost) * 1000; // calculo do lucro total dos 1000 produtos
    console.log(totalProfit);
} else {
    console.log("Erro, os valores não podem ser menores que 0");
} */

//------------------------------------------------------

// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
/* A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
  INSS (Instituto Nacional do Seguro Social)
        Salário bruto até R$ 1.556,94: alíquota de 8%
        Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
        Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
        Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
  IR (Imposto de Renda)
        Até R$ 1.903,98: isento de imposto de renda
        De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
        De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
        De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
        Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */

const salarioBruto = 3000;
let descontoInss = 0;
let impostoIr = 0;

if (salarioBruto <= 1556.94) {
    descontoInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    descontoInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    descontoInss = salarioBruto * 0.11;
} else {
    descontoInss = salarioBruto - 570.88;
}

const salarioBase = salarioBruto - descontoInss;

if (salarioBase <= 1903.88) {
    impostoIr = 0;
} else if (salarioBase <= 2826.65) {
    impostoIr = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
    impostoIr = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    impostoIr = (salarioBase * 0.225) - 636.13;
} else {
    impostoIr = (salarioBase * 0.275) - 869.36;
};

console.log("O salario com descontos ficou em R$", (salarioBase - impostoIr));