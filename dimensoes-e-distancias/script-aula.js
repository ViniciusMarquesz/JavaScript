const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight; // Tamanho total do item
const animaisTop = listaAnimais.offsetTop;
const animaisLeft = listaAnimais.offsetLeft;

const primeiroh2 = document.querySelector('h2');
const h2Left = primeiroh2.offsetLeft;



const rect = primeiroh2.getBoundingClientRect();
console.log(rect)

const section = document.querySelector('.animais');

const rectSection = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll


console.log(
   window.innerWidth, // width do janela
   window.outerWidth, // soma dev tools também
   window.innerHeight, // height do janela
   window.outerHeight, // soma a barra de endereço

   window.pageYOffset, // distância total do scroll vertical
   window.pageXOffset, // distância total do scroll horizontal
)

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}


const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}
