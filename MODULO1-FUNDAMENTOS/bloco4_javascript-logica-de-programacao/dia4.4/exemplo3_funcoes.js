// 1. Faça cinco programas, um para cada operação aritmética básica.

/* function operacao (operador, num1, num2) {
    if (operador === '+'){
        return num1 + num2;
    } else if (operador === '-') {
        return num1 - num2;
    } else if (operador === '*') {
        return num1 * num2;
    } else if (operador === '/') {
        return num1 / num2;
    } else if (operador === '%') {
        return num1 % num2;
    }
}

console.log(operacao('%', 4, 2)); */

/* function sum(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function mod(a, b) {
    return a % b;
}

console.log(sum(5,5)); */

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
/* function numMaior(num1, num2) {
    if (num1 > num2) {
        return num1;
    } 
    return num2;
}

console.log(numMaior(4,2)); */

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
/* function numMaiorDos3(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > (num1 && num3)){
        return num2;
    }
    return num3;
}

console.log(numMaiorDos3(3,1,2)); */

// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
/* function posOuNeg(number) {
    if (number > 0) {
        return 'positive';
    } else if (number === 0) {
        return 'esse número é 0';
    }
    return 'negative';
}

console.log(posOuNeg(0)); */

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário.
function triangle(ang1, ang2, ang3) {
    if ((ang1 && ang2 && ang3) < 0) {
        return 'Ângulo inválido';
    } else if (ang1 + ang2 + ang3 === 180) {
        return true;
    } else {
        return false;
    }
}

console.log(triangle(90, 60, 30));