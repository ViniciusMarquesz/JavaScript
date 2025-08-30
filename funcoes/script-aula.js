function areaQuadrada(lado) {
  return lado * lado;
}

console.log(areaQuadrada(4));

function pi () {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(80, 1.8));


function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
corFavorita(); // retorna 'Você não gosta de nada'


addEventListener('click', function(){console.log('oi') });

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Por favor preencha um número'
  }
  if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;

  return `Faltam visitar ${totalPaises - paisesVisitados} paises `
}

var profissao = 'TI';

function dados() {
  var nome = 'Vinicius';
  var idade = 28;
  function outrosDados() {
    var endereco = 'São Paulo';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());
outrosDados; // retorna um erro
 