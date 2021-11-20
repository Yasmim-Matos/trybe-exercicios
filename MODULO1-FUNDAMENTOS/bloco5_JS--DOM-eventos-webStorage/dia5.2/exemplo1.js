// 1. Acesse o elemento elementoOndeVoceEsta .
console.log(document.querySelector("#elementoOndeVoceEsta"));

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.querySelector("#elementoOndeVoceEsta").parentElement.style.background = "red";

// 3.Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById("primeiroFilhoDoFilho").innerText = "fldçajflajfldsajf";

// 4.Acesse o primeiroFilho a partir de pai .
console.log(document.getElementById("pai").firstElementChild);

// 5.Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(document.getElementById("elementoOndeVoceEsta").previousElementSibling);

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

// 8. Agora acesse o terceiroFilho a partir de pai .
console.log(document.getElementById("pai").lastElementChild.previousElementSibling);


// 1. Crie um irmão para elementoOndeVoceEsta .
const elementoPai = document.getElementById("pai");
const elementoIrmao = document.createElement("section");
elementoIrmao.id = 'brother';
elementoPai.appendChild(elementoIrmao);

// 2. Crie um filho para elementoOndeVoceEsta .
const elementoAtual = document.getElementById("elementoOndeVoceEsta");
const filhoElementoAtual = document.createElement('article');
filhoElementoAtual.id = 'son';
elementoAtual.appendChild(filhoElementoAtual);

// 3. Crie um filho para primeiroFilhoDoFilho .
const primogenito = document.getElementById("primeiroFilhoDoFilho");
const netoMaisVelho = document.createElement('section');
netoMaisVelho.id = 'netoMaisVelho';
primogenito.appendChild(netoMaisVelho);

// 4. A partir desse filho criado, acesse terceiroFilho .
console.log(document.getElementById("netoMaisVelho").parentElement.parentElement.nextElementSibling);

// 5. Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
