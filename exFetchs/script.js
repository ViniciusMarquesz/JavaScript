// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById("cep");
const btnCep = document.getElementById("btncep");
const resultadoCep = document.querySelector(".resultadoCep");

btnCep.addEventListener("click", handleClick);

async function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;

  await buscaCep(cep);
}

async function buscaCep(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    console.log(data)

    if (data.erro) {
      resultadoCep.innerText = "CEP não encontrado";
      return;
    }

    resultadoCep.innerHTML = `
      <p>CEP: ${data.cep}</p>
      <p>Rua: ${data.logradouro} </p>
      <p>Bairro: ${data.bairro}</p>
      <p>Cidade: ${data.localidade}</p>
      <p>Estado: ${data.estado}</p>

    `;
  } catch (erro) {
    resultadoCep.innerText =
      "Erro ao buscar o CEP. Tente novamente mais tarde.";
  }
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const valorBTC = document.querySelector('.btc');

async function pegarBitcoin() {
  try {
    const response = await fetch('https://blockchain.info/ticker');
    const data = await response.json();

    //Valor de compra do Bitcoin em reais
    const valorReais = data.BRL.buy;

    valorBTC.innerText = `R$ ${valorReais.toLocaleString('pt-BR')}`;
    
  } catch (error) {
      valorBTC.innerText = 'Erro ao carregar valor do BTC';

  }
  
}

pegarBitcoin();
setInterval(pegarBitcoin, 20000);



// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const piada = document.querySelector('.piada');
const btnProxima = document.querySelector('.btn-proxima');

async function gerarPiada() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();

    piada.innerText = data.value;

  } catch (erro) {
    piada.innerText = "Erro ao carregar piada.";
  }
}

btnProxima.addEventListener('click', gerarPiada);

gerarPiada();

