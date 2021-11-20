/* let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
    };
    
    diasDaSemana.1; // SyntaxError: Unexpected number, acontece esse erro pois quando a chave do objeto é um número, a maneira correta de acessar ela é através da notação de colchetes 
    console.log(diasDaSemana['1']); // domingo
 */
/*     let usuario = {
        id: 99,
        email: 'jakeperalta@gmail.com',
        infoPessoal: {
          nome: 'Jake',
          sobrenome: 'Peralta',
          endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
          },
        },
      };
      
      console.log(usuario['id']); // 99
      console.log(usuario.email); // jakeperalta@gmail.com
      
      console.log(usuario.infoPessoal.endereco.rua); // Smith Street
      console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque */

      /* let moradores = [
        {
          nome: 'Luiza',
          sobrenome: 'Guimarães',
          andar: 10,
          apartamento: 1005,
        },
        {
          nome: 'William',
          sobrenome: 'Albuquerque',
          andar: 5,
          apartamento: 502,
        },
        {
          nome: 'Murilo',
          sobrenome: 'Ferraz',
          andar: 8,
          apartamento: 804,
        },
        {
          nome: 'Zoey',
          sobrenome: 'Brooks',
          andar: 1,
          apartamento: 101,
        },
      ];
      
      let primeiroMorador = moradores[0];
      console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
      console.log(primeiroMorador['andar']); // 10
      
      let ultimoMorador = moradores[moradores.length - 1];
      console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
      console.log(ultimoMorador.nome); // Zoey */

// 1. Crie um objeto player contendo as variáveis listadas abaixo.

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
};

// 2. Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
console.log(`A jogadora ${player.name} ${player.lastName} tem ${player['age']} de idade`);
console.log('A jogadora', player['name'], player['lastName'], 'tem', player['age'], 'de idade'); 

// 3. Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.table(player);

// 4. Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
player.fullName = player.name + ' ' + player.lastName;
console.log(`A jogadora ${player.fullName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`);
console.log('A jogadora', player['fullName'], 'foi eleita a melhor do mundo por', player['bestInTheWorld'].length, 'vezes');

// 5. Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log(`A jogadora ${player['fullName']} possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`);
console.log('A jogadora possui', player.medals.golden, 'medalhas de ouro e', player.medals.silver, 'medalhas de prata');