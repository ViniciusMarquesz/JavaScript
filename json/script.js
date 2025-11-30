async function carregarDados() {
  try {
    const response = await fetch("./dados.json");

    if (!response.ok) {
      throw new Error("Erro ao buscar o arquivo");
    }

    const data = await response.json();
    console.log(data);

    data.forEach((aula) => {
      console.log("ID:", aula.id);
      console.log("Aula:", aula.aula);
      console.log("Tempo:", aula.tempo);
    })

  } catch (erro) {
    console.error("Deu erro:", erro);
  }
}

carregarDados();


const textoJSON = '{"id": 1, "titulo": "JavaScript", "tempo": "25min"}';
const textoOBJ = JSON.parse(textoJSON);

const enderecoOBJ = {
  cidade: 'Rio de Janeiro',
  rua: 'Ali Perto',
  pais: 'Brasil',
  numero: 50,
};
const enderecoJSON = JSON.stringify(enderecoOBJ);

console.log(textoOBJ)
console.log(enderecoJSON)

const configuracoes = {
  player: 'Google API',
  tempo: 25.5,
  aula: '2-1 JavaScript',
  vitalicio: true,
};

localStorage.configuracoes = JSON.stringify(configuracoes);
const pegarConfiguracoes = JSON.parse(localStorage.configuracoes);
console.log(pegarConfiguracoesvmzin)

