const somar = (a, b) => a + b;
somar(4,2); // 6

const quadrado = a => a * a;
quadrado(4); // 16

var instrumento = 'Violão';



// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(function() {
  // código isolado do escopo global
  var instrumento = 'Guitarra';
  console.log(instrumento); // Guitarra
})();

console.log(instrumento); // Violão


const instrumento2 = 'Violão';

(() => {
  const instrumento2 = 'Guitarra';
  console.log(instrumento2); // Guitarra
})();

console.log(instrumento2); // Violão


// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');
console.log(priceNumber('R$ 199,99'))




