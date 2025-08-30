var nome = 'Vinicius'

var nomeMinusculo = nome.toLowerCase();

var altura = 1.8;
altura.toString(); // Transforma em string '1.8'
altura.toFixed // Arredonda para 2

var btn = document.querySelector('.btn');

btn.classList.add('azul'); // Adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function(){
  console.log('Clicou')
})
