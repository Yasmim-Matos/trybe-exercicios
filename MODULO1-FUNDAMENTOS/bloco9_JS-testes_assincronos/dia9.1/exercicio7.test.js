const uppercase = require("./exercicio7");

describe('Verifique a chamada da callback da função uppercase', () => {
    it('Verifica se a função transforma as letras de uma palavra em letras maiúsculas', (done) => {
        uppercase('test', (str) => {
        try {
            expect(str).toBe('TEST');
            done();
        } catch (error) {
            done(error);
        }
        });
    });
});