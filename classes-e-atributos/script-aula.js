const menu = document.querySelector('.menu');
menu.classList.add('ativo', 'teste');
menu.classList.remove('ativo');
menu.classList.toggle('azul');

if(menu.classList.contains('azul')) {
   menu.classList.add('possui-azul');
} else {
   menu.classList.add('nao-possui-azul')
}

menu.className += ' vermelho';

console.log(menu.className)

const animais = document.querySelector('.animais');

console.log(animais.attributes);

const img = document.querySelector('img');

const srcImg = img.getAttribute('src');

img.setAttribute('alt', 'É uma Raposa')

console.log(srcImg);

const carro = {
   portas: 4,
   andar(km) {
      console.log(`Andou ${km} km`)
   }
}