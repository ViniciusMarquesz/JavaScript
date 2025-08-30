var simbolo = Symbol();
var idade = 20;

console.log(typeof Symbol);
console.log(typeof idade);

var nome = 'Vinicius';
var sobrenome = 'Marques';
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

//Template String

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando template string

console.log(frase1);
console.log(frase2);