var pessoa = {
  nome: 'Vinicius',
  idade: 20,
}

console.log(pessoa);

/* var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    
    return this.lados * lado;
  }
} */

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado; 
  }
}  

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5)); 
console.log(Math.random());

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  
  metadeHeight() {
    return this.height/50;
  }
}

menu.backgroundColor = '#000';
menu.color = 'blue';

menu.esconder = function() {
  console.log('Escondi');
}

var bg = menu.backgroundColor;