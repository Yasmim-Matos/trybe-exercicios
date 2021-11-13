// método .push() - Adiciona um ou mais elementos no final do array | Já o método .unshift() - Adiciona um ou mais elementos no início do array
// método .pop() - Remove remove o último elemento de um array e retorna aquele elemento | método .shift() - remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array. 
// método .indexOf() - procura o índice de um item no Array.

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu.indexOf('Serviços'); (procura a posição/índice do item serviços)
let menuServices = menu[1]; // Obtenha o valor "Serviços" do array menu

let indexOfPortfolio = menu.indexOf('Portfólio');  // Procure o índice do valor "Portfólio" do array menu

menu.push('Contato'); // Adicione o valor "Contato" no final do array menu

console.log(menuServices);
console.log(indexOfPortfolio);
console.log(menu);