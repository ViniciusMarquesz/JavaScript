// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
console.log(menu);

const cloneMenu = menu.cloneNode(true);
console.log(cloneMenu)

copy.appendChild(cloneMenu)



// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');
console.log(primeiroDt)

// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;
