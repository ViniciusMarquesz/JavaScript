// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito; 

darCredito = (possuiCarro && possuiCasa) ? 'Dar crédito ao cliente' : 'Negar crédito';
console.log(darCredito);


var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca


if(false) {
  var carro2 = 'Fusca 2';
  console.log(carro2);
}
console.log(carro2); // undefined

{
  var carro3 = 'Fusca 3';
  const ano = 2018;
}
console.log(carro3); // Carro
//console.log(ano); // erro ano is not defined

var i = 10;

for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10


const mes = 'Dezembro';
// mes = 'Janeiro'; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.ano = 2020;
data.dia = 29; // Funciona
// data = 'Janeiro'; // erro

