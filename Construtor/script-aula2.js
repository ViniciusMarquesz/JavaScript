// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativo() {
//     this.element().classList.add('ativo');
//   },
// }

// Dom.ativo(); // adiciona ativo ao li
// Dom.seletor = 'ul';
// Dom.ativo(); // adiciona ativo ao ul
function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  }
  this.ativar = function (classe) {
    this.element().classList.add(classe);
  }
}

const li = new Dom('li');
li.ativar('ativo');
const ul = new Dom('ul');
ul.ativar('ativo');

const lastLi = new Dom('li:last-child');
lastLi.ativar('ativo');
