/* 10. Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach . */

beforeEach(() => console.log('1 - beforeEach')); // É executado antes do teste de fora do describe iniciar. Depois que o after de fora do describe termina de executar, este before é executado novamente, pois vai ser iniciado um novo teste.
afterEach(() => console.log('1 - afterEach')); // É executado depois do teste de fora do describe finalizar. Finalizado o teste de dentro do describe e o after de dentro do describe também finalizar, este after inicia novamente, pois outro teste foi finalizado.

test('', () => console.log('1 - test')); // Inicia o teste após o primeiro beforeEach.

describe('Scoped / Nested block', () => {
    beforeEach(() => console.log('2 - beforeEach')); // É executado antes do teste de dentro do describe iniciar
    afterEach(() => console.log('2 - afterEach')); // É executado depois do teste de dentro do describe finalizar

    test('', () => console.log('2 - test')); // É executado depois do beforeEach de dentro do describe
});

/*
1 - beforeEach // antes de cada teste
1 - test // o teste
1 - afterEach // depois de cada teste
1 - beforeEach // antes de cada teste
2 - beforeEach // antes de cada teste dentro do describe
2 - test // o teste dentro do describe
2 - afterEach // depois de cada teste dentro do describe
1 - afterEach // depois de cada teste 
*/