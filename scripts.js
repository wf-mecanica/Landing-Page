/* ==========================================================
   ANO AUTOMÁTICO NO RODAPÉ
========================================================== */
document.getElementById("year").textContent = new Date().getFullYear();


/* ==========================================================
   MENU MOBILE (ABRIR/FECHAR)
========================================================== */
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "block" ? "none" : "block";
});


/* ==========================================================
   ALTERAR MENU + LOGO AO ROLAR A PÁGINA
========================================================== */
window.addEventListener("scroll", () => {

    const header = document.querySelector(".site-header");

    // Quando rolar mais que 20px
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* ==========================================================
   FORMULÁRIO DE CONTATO (VERSÃO SIMPLES)
========================================================== */
function handleForm(e) {
    e.preventDefault();

    alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    
    e.target.reset();
    return false;
}
