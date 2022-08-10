'use strict';

const check = document.querySelector('.check');
const mensagem = document.querySelector('.mensagem');
let numero = Math.trunc(Math.random() * 20) + 1;
let pontuacao = 20;
const escrevePontuacao = document.querySelector('.pontuacao');
const reset = document.querySelector('.reset');
let recorde = 0;
const escreveRecorde = document.querySelector('.recorde');

console.log(numero);

check.addEventListener('click', function () {
  const palpite = Number(document.querySelector('.palpite').value);
  console.log(palpite);
    if(!palpite){
        mensagem.textContent = 'Por favor introduza um número';
    } else if (palpite === numero) {
        mensagem.textContent = 'Parabéns acertas-te no número';
        document.querySelector('.numero').textContent = numero;
        if (pontuacao > recorde) {
          recorde = pontuacao;
          escreveRecorde.textContent = pontuacao;
        }
    } else if (palpite < numero) {
      if (pontuacao > 1) {
        mensagem.textContent = "O seu palpite é menor que o número";
        pontuacao--;
        escrevePontuacao.textContent = pontuacao;
      } else {
        mensagem.textContent = "Perdes-te";
        escrevePontuacao.textContent = "0";
      }
    } else if (palpite > numero) {
      if (pontuacao > 1) {
        mensagem.textContent = "O seu palpite é maior que o número";
        pontuacao--;
        escrevePontuacao.textContent = pontuacao;
      } else {
        mensagem.textContent = 'Perdes-te';
        escrevePontuacao.textContent = '0';
      }
    }

});

reset.addEventListener('click', function () {
  document.querySelector('.numero').textContent = '?';
 numero = Math.trunc(Math.random() * 20) + 1;
 pontuacao = 20;
 escrevePontuacao.textContent = pontuacao;
 console.log(numero);
 mensagem.textContent = "Tente adivinhar o numero de 1 a 20";
 document.querySelector('.palpite').value = '';
});

resetJogo = function () {
  document.querySelector('.numero').textContent = '?';
  numero = Math.trunc(Math.random() * 20) + 1;
  pontuacao = 20;
  escrevePontuacao.textContent = pontuacao;
  console.log(numero);
  mensagem.textContent = "Tente adivinhar o numero de 1 a 20";
  document.querySelector('.palpite').value = '';
}
