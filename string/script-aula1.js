const comida = "Pizza"; //String
const agua = new String('Agua '); //Objeto string

console.log(agua.length);

const frase = 'A melhor comida';

console.log(frase[frase.length - 1]);
console.log(frase.charAt(frase.length - 1));

const frase2 = 'A melhor linguagem é ';
const linguagem = 'JavaScript'

const fraseCompleta = frase2.concat(linguagem, '!!');
console.log(fraseCompleta);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); //True
fruta.includes(listaFrutas); // False

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.');   // R$ 99.....

const frase3 = 'Ta';

frase3.repeat(5); // TaTaTaTaTa

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'

const listaItens2 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens2.split(' ');
console.log(arrayItens);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(htmlNovo);

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'






