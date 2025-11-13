function espera(texto) {
  console.log(texto);
}
setTimeout(espera, 1000, 'Depois de 1s');

setTimeout(() => {
  console.log('Após 0s?');
});


for(let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, 300 * i);
}


function loop(texto) {
  console.log(texto);
}
setInterval(loop, 1000, 'Passou 1s');

// loop a cada segundo
let j = 0;
setInterval(() => {
  console.log(j++);
}, 1000);



const contarAte10 = setInterval(callback, 1000);

let i = 0;
function callback() {
  console.log(i++);
  if (i > 10) {
    clearInterval(contarAte10);
  }
}

