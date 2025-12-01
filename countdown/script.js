import Countdown from './countdown.js';

const natal = new Countdown('24 December 2025 23:59:59 GMT-0300');
const anoNovo = new Countdown('31 December 2025 23:59:59 GMT-0300');

const natalDiv = document.querySelector('#natal');
const anoNovoDiv  = document.querySelector('#anonovo');
const botaoTema  = document.getElementById('toggle-theme');
const html = document.documentElement;


function atualizarTela() {
  const tempoNatal = natal.total;
  const tempoAno = anoNovo.total;

  natalDiv.innerHTML = gerarHTML(tempoNatal);
  anoNovoDiv .innerHTML = gerarHTML(tempoAno);
}

function gerarHTML(tempo) {
  return `
    <div class="item"><span>${tempo.days}</span>dias</div>
    <div class="item"><span>${tempo.hours}</span>hrs</div>
    <div class="item"><span>${tempo.minutes}</span>min</div>
    <div class="item"><span>${tempo.seconds}</span>s</div>
  `;
}

setInterval(atualizarTela, 1000);
atualizarTela();

/* Alternar tema (claro/escuro) */
botaoTema.addEventListener('click', () => {
  const atual = html.getAttribute('data-theme');
  let novo;

  if (atual === 'dark') {
    novo = 'light';  // Se está dark, muda para light
  } else {
    novo = 'dark';   // Se está light, muda para dark
  }

  html.setAttribute('data-theme', novo);

  if (novo === 'dark') {
    botaoTema.textContent = '🌙';
  } else {
    botaoTema.textContent = '☀️';
  }
});
