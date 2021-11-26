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

createOption();

// Verificando o campo da data de início

const campoData = document.getElementById('data-inicio');

function verificaData() {
    const data = campoData.value;
    const dia = parseInt(data.slice(0,2));
   
    const mes = parseInt(data.slice(2,4));
    
    const ano = parseInt(data.slice(4,10));
    

    if ((dia > 0 && dia <= 31) && (mes > 0 && mes <= 12) && (ano > 0)){
        console.log('Data existente');
         console.log(dia);
         console.log(mes);
         console.log(ano);
        return true;
    } else {
        alert('Erro: Data inválida');
    }
}

verificaData();