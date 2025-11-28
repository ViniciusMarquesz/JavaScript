const cep = fetch('https://viacep.com.br/ws/14811425/json/');

cep
.then(r => r.json())
.then(body => {
  console.log(body.logradouro)
  const conteudo = document.querySelector('.conteudo')
  conteudo.innerText = body.cep;
  
})