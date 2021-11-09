
/* const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
} */





/* const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);
 */
//Com o operador && (AND - E) a condição só será verdadeira se todas as opções forem verdadeiras, se alguma delas for falsa a resposta será falsa.




const currentHour = 25;

let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir.";
} else if (currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14){
    message = "Hora do almoço!";
} else if (currentHour > 4 && currentHour < 11){
    message = "Hmmmm, cheiro de café recém passado.";
} else {
    message = "Para de comer pessoa kkkkk";
}

console.log(message);