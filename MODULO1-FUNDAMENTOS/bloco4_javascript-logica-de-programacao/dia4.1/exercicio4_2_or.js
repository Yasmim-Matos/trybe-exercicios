/* const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
} */



/* const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo); */

//Com o operador || (OR - OU) apenas uma condição precisa ser true ou truthy. Para que a resposta seja falsa todas as condições precisam ser falsas.



let weekDay = "sábado";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else if (weekDay === "sábado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanso merecido UwU");
} else {
    console.log("Acho que isso não é um dia de semana :P");
}
