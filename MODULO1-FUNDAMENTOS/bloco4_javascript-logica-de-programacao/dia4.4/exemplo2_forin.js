/* let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
} */

/* let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  } */

  // OBS.: O FOR IN itera tanto array quanto objeto, já o FOR OF itera apenas arrays. 
  // O FOR IN percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, elas correspondem ao índice de cada posição, e não nos valores das propriedades. 
  // Já o FOR OF percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o For/in. 

/* let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
    console.log(position);
};
//resultado: 0, 1, 2;

for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé; */

// 1. Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
/* let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for (let imprimirNome in names) {
      console.log('Olá ', names[imprimirNome]);
  } */

// 2. Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let imprimirCarro in car) {
      console.log(imprimirCarro, car[imprimirCarro]);
  }