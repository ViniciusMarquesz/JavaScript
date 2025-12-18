const carro = {
  marca: 'Fiat',
  ano: 2020,
  portas: 4,
}

const {marca, ano} = carro;

console.log(marca)
console.log(ano)

const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

const {livros, videos} = cliente.compras.digitais;

console.log(livros);
console.log(videos);

const cliente2 = {
  nome: 'Andre',
  compras: 10,
}

const {nome, compras} = cliente2;
// ou
const {nome: nomeCliente, compras: comprasCliente} = cliente2;



// const primeiro = 'Item 1';
// const segundo = 'Item 2';
// const terceiro = 'Item 3';

// ou

const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']; 


function handleKeyboard({key}) {
  console.log(key)
}

document.addEventListener('keyup', handleKeyboard);


