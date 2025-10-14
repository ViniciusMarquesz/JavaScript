const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

dados[2]('Ford');
dados[1][2].cor; // azul

const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
const carros = new Array('Corola', 'Mustang', 'Honda');

carros[1] // Mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length; // 11

let li = document.querySelectorAll('li'); // NodeList
li = Array.from(li); // Array

const carros = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 4,
}

const carrosArray = Array.from(carros);

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 4
frutas[2].length; // 2

const instrumentos3 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos3.sort();
instrumentos3; // ['Baixo', 'Guitarra', Violão]

const idades = [32,21,33,43,1,12,8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]

const carros2 = ['Ford', 'Fiat', 'VW'];
carros2.unshift('Honda', 'Kia'); // 5
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros2.push('Ferrari'); // 6
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros3.shift(); // 'Ford'
carros3; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros3.pop(); // 'Honda'
carros3; // ['Fiat', 'VW'];

const carros4 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros4.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];

const carros5 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros5.splice(1, 0, 'Kia', 'Mustang'); // []
carros5; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros5.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
carros5; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

//-----------------------------------------------------------//

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// ['Banana', 'Banana', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// ['Item1', 'Item2', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4']


const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];


const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5









