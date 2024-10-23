// Rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(ancora => {
  ancora.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Barra de navegação dinâmica
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('rolado');
  } else {
    navbar.classList.remove('rolado');
  }
});

// Efeito de digitação
const spanTextoDigitado = document.querySelector("#texto-digitado");
const spanCursor = document.querySelector(".cursor");

const arrayTextos = ["criando experiências musicais inesquecíveis", "dando vida às melodias", "tornando seus eventos extraordinários"];
const atrasoDigitacao = 100;
const atrasoApagar = 50;
const atrasoNovoTexto = 2000;
let indiceArrayTextos = 0;
let indiceCaractere = 0;

function digitar() {
  if (indiceCaractere < arrayTextos[indiceArrayTextos].length) {
    if(!spanCursor.classList.contains("digitando")) spanCursor.classList.add("digitando");
    spanTextoDigitado.textContent += arrayTextos[indiceArrayTextos].charAt(indiceCaractere);
    indiceCaractere++;
    setTimeout(digitar, atrasoDigitacao);
  } 
  else {
    spanCursor.classList.remove("digitando");
    setTimeout(apagar, atrasoNovoTexto);
  }
}

function apagar() {
  if (indiceCaractere > 0) {
    if(!spanCursor.classList.contains("digitando")) spanCursor.classList.add("digitando");
    spanTextoDigitado.textContent = arrayTextos[indiceArrayTextos].substring(0, indiceCaractere-1);
    indiceCaractere--;
    setTimeout(apagar, atrasoApagar);
  } 
  else {
    spanCursor.classList.remove("digitando");
    indiceArrayTextos++;
    if(indiceArrayTextos>=arrayTextos.length) indiceArrayTextos=0;
    setTimeout(digitar, atrasoDigitacao + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(arrayTextos.length) setTimeout(digitar, atrasoNovoTexto + 250);
});

// Contadores animados
const contadores = document.querySelectorAll('.contador');
const velocidade = 200;

contadores.forEach(contador => {
  const atualizarContagem = () => {
    const alvo = +contador.getAttribute('data-alvo');
    const contagem = +contador.innerText;
    const incremento = alvo / velocidade;

    if (contagem < alvo) {
      contador.innerText = Math.ceil(contagem + incremento);
      setTimeout(atualizarContagem, 1);
    } else {
      contador.innerText = alvo;
    }
  };

  atualizarContagem();
});

// Inicializar Lightbox
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
});
