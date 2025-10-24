const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function(item, index, array) {
  console.log(item.toUpperCase());
});

// com Arrow Function
carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
})

const li = document.querySelectorAll('li');

li.forEach(i => i.classList.add('ativa'));

li.forEach(function(item) {
  item.classList.add('ativa');
});

const carros2 = ['Ford', 'Fiat', 'Honda'];
carros2.forEach((item, index, array) => {
  array[index] = 'Carro ' + item;
});

carros2; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

const carros3 = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros.map((item) => {
  return 'Carro ' + item;
});

carros3; // ['Ford', 'Fiat', 'Honda']
newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda'];

const carros4 = ['Ford', 'Fiat', 'Honda'];
const newCarros2 = carros.map((item) => {
  const novoValor = 'Carro ' + item;
});

newCarros; // [undefined, undefined, undefined];

const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX2 = numeros.map(n => n * 2);

numerosX3; // [6, 12, 18, 24, 30, 36, 42];

const numeros2 = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3);

numerosX3; // [6, 12, 18, 24, 30, 36, 42];

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);
// [15, 10, 20, 25];

const puxarNomes = aula => aula.nome;
const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

const aulas2 = [10, 25, 30];
const total1 = aulas2.reduce((acumulador, atual) => {
  return acumulador + atual;
});
total1; // 65

const total2 = aulas2.reduce((acc, cur) => acc + cur, 100);
total2; // 165

const aulas3 = [10, 25, 30];

const numerosMaior = [10, 25, 60, 5, 35, 10];

const maiorValor = numerosMaior.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});

maiorValor; // 60

const aulas4 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas4.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {})

const frutas = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas.every((fruta) => {
  return fruta; // false
});

const numeros3 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros3.every(x => x > 3); // true

const frutas2 = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas2.findIndex((fruta) => {
  return frutas2 === 'Uva'; 
}); // 2

const numeros4 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros4.find(x => x > 45); // 88

const aulas5 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulasMaiores = aulas.filter((aula) => { 
  return aula.min > 15;
});
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]









