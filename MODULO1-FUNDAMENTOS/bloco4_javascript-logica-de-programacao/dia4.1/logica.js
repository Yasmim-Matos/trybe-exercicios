/* function fahrenheit_to_celsius(temp_fahrenheit) {
    // Write your code here
    let temp_celcius = ((temp_fahrenheit - 32) / 1.8);
    let pontoFlutuante = temp_celcius + ".0";
    return pontoFlutuante;
}
console.log(fahrenheit_to_celsius(95));
 */

/* function difference(x) {
    // Write your code here
    
    if (x < 0){
        let positivoX = x * (-1);
        let menor0 = (10 - positivoX);
        return menor0;
    } else if (x > 0 && x <= 10) {
        let maior10 = (10 - x);
        return maior10;
    } else if (x > 10) {
        maiorX = (x - 10);
        return maiorX;
    }
}
console.log(difference(-3)); */

/* function count_down(x) {
    // Write your code here
    let pontos = [];
    for (let index = 0; index <= x; x -= 1) {
        if (x === 0) {
            pontos.push(x + "!!!");
        } else {
        pontos.push(x + "...");
        }
    }
    return pontos;
} */

/* let pontos = '';
    for (let index = 0; index <= x; x -= 1) {
        if (x === 0) {
            concat2 = x + "!!!";
            pontos += concat2;
        } else {
            let concat1 = x + "...";
            pontos += concat1;
        }
    }
    return pontos;
}
console.log(count_down(3)); */

/* function multiples_of_3_or_5(roof) {
    // Write your code here
    let soma = 0;
    let lastRoof = roof;
    for (let index = 0; index < roof; roof -= 1) {
        if (roof < lastRoof && (roof % 3 === 0 || roof % 5 === 0)) {
            soma = soma + roof;
        }
    }
    return soma;
}

console.log(multiples_of_3_or_5(10)); */


function even_fibonacci_numbers(roof) {
    // Write your code here
    let soma = 0;
    let lastRoof = roof;
    for (let index = 0; index < roof; roof -= 1){
        if (roof < lastRoof && roof % 2 === 0){
            soma = soma + roof;
        }
    }
    return soma;
}

console.log(even_fibonacci_numbers(100));

