/* 2. Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas? */

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // Marte aparece primeiro pois não tem setTimeout então ele é o primeiro a ser executado, ou seja, ele está sendo impresso de forma síncrona
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // Venus é o terceiro planeta a aparecer, pois o tempo do setTimeout dele é o maior dos 3 planetas
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // Jupiter é o segundo planeta a aparecer, pois o tempo do setTimeout dele é menor do que o de Venus