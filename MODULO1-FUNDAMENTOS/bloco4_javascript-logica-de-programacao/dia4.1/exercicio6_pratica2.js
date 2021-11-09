//4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

/* const number = 99;

if (number > 0) {
    console.log("O número ", number, "é positivo");
} else if (number < 0) {
    console.log("O número ", number, "é negativo");
} else {
    console.log("O número é 0");
}
 */

//------------------------------------------------------

//5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

/* const ang1 = 60;
const ang2 = 90;
const ang3 = -190;

let somaAngulos = ang1 + ang2 + ang3;

let angulosPositivos = ang1 > 0 && ang2 > 0 && ang3 > 0;

if(angulosPositivos){
  if (somaAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log("Nem aqui nem na China que esse ângulo é válido");
} */