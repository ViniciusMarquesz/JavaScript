const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(carro);
honda.init('Honda').acelerar();


const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

const carro2 = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(carro2, funcaoAutomovel);

const moto2 = {}
Object.defineProperties(moto2, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
})

moto2.rodas = 4;
delete moto2.capacete;
moto2;
// {rodas: 2}

const moto3 = {}
Object.defineProperties(moto3, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})

moto3.velocidade = 200;
moto3.velocidade;
// Velocidade 200

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade


Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carrao = {
  marca: 'Ford',
  ano: 2018,
}
Object.keys(carrao);
// ['marca', 'ano']
Object.values(carrao);
// ['Ford', 2018]
Object.entries(carrao);
// [['marca', 'Ford'], ['ano', 2018]]

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro4 = {
  marca: 'Ford',
  ano: 2018,
}
Object.getOwnPropertyNames(carro4);
// ['marca', 'ano']


const frutas = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false

const carro5 = {
  marca: 'Ford',
  ano: 2018,
}
Object.freeze(carro5);
Object.seal(carro5);
Object.preventExtensions(carro5);

Object.isFrozen(carro5); // true
Object.isSealed(carro5); // true
Object.isExtensible(carro5); // false

const frutas3 = ['Banana', 'Uva'];
frutas3.constructor; // Array

const frase = 'Isso é uma String';
frase.constructor; // String

Array.prototype.isPrototypeOf(frutas3); // true



const frutas4 = ['Banana', 'Uva'];
frutas4.toString(); // 'Banana,Uva'
typeof frutas4; // object
Object.prototype.toString.call(frutas4); // [object Array]

const frase2 = 'Uma String';
frase2.toString(); // 'Uma String'
typeof frase2; // string
Object.prototype.toString.call(frase2); // [object String]

const carro6 = {marca: 'Ford'};
carro6.toString(); // [object Object]
typeof carro6; // object
Object.prototype.toString.call(carro6); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]








