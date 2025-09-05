const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');

//console.log(h1.innerHTML);
//console.log(h1.outerHTML);

//h1.outerHTML = '<p>Novo Titulo</p>';
// console.log(animaisLista.innerHTML);


const lista = document.querySelector('.animais-lista');

console.log(lista.children[--lista.children.lenght]);
console.log(lista.querySelector('li:last-child'));

console.log(lista.previousElementSibling);

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

const mapa = document.querySelector('.mapa');
contato.insertBefore(animais, mapa)

contato.removeChild(titulo);




const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);



const titulo2 = document.querySelector('h1');
const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true);

contato.appendChild(cloneTitulo);







