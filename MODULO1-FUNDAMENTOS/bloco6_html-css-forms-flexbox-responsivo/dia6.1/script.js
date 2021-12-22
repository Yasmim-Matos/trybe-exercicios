const estados = { 
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Distrito Federal',
    'ES': 'Espírito Santo',
    'GO': 'Goias',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraima',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins'
} 


// Criando as options do select dinâmicamente
const states = document.getElementById('state');

function createOption(){
    for (let index in estados) {
        const option = document.createElement('option');
        option.setAttribute('value', index);
        option.setAttribute('required', '');
        option.innerText = estados[index];
        states.appendChild(option);
    }
}

// Verificando o campo da data de início

const campoData = document.getElementById('data-inicio');
const botaoEnviar = document.querySelector('#envia')

function verificaData() {
    const data = campoData.value;
    const dia = parseInt(data.slice(0,1)); //01101997
    const mes = parseInt(data.slice(2,3)); //01234568
    const ano = parseInt(data.slice(4,8));
    
    if ((dia > 0 && dia <= 31) && (mes > 0 && mes <= 12) && (ano > 0)){
        alert('Data existente');
        console.log(dia);
        console.log(mes);
        console.log(ano);
    } else {
        alert('Erro: Data inválida');
        console.log(dia);
        console.log(mes);
        console.log(ano);
        
    }
}

window.onload = function () {
    createOption();
    botaoEnviar.addEventListener('click', verificaData);
}