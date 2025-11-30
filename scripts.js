// scripts.js
document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle && menuToggle.addEventListener('click', () => {
  if (!nav) return;
  nav.style.display = (nav.style.display === 'block') ? '' : 'block';
});

// Mock de envio de formulário — substitua por integração real (Formspree / Google Apps Script / backend)
function handleForm(e){
  e.preventDefault();
  alert('Obrigado! Recebemos sua mensagem. Vamos responder em breve.');
  e.target.reset();
  return false;
}
// Encolher logo + mudar fundo do menu ao rolar
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');

  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
