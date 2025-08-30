var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log('Possui graduação, mas não doutorado');
} else {
  console.log("Não possui graduação")
}


var nome = '10kg' / 10;

if(nome) {
  console.log(nome);
} else {
  console.log('Nome não existe');
}

if(!possuiGraduacao) {
  console.log("Não possui graduação");
} else {
  console.log('Possui graduação');
}


var condicional = (5 - 10) && (5 + 5);
if (condicional) {
  console.log('Verdadeiro', condicional);
} else {
  console.log('Falso');
}

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional2)



var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break; 
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}



/*if(possuiGraduacao) {
  console.log('[E verdadeiro');
  var x = 10;
} else {
  console.log('É falso')
}

console.log(x); */