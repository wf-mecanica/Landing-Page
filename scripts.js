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
/* ==========================================================
   CONSULTA DE SERVIÇO (Modo demonstração)
   Pode ser integrado ao Google Sheets depois!
========================================================== */

const bancoDemo = {
    "ABC1234": {
        veiculo: "Fiat Palio 1.0",
        status: "Em andamento",
        etapas: [
            "✔ Diagnóstico concluído",
            "✔ Peças separadas",
            "⏳ Serviço em execução",
            "⌛ Aguardando revisão final"
        ]
    },
    "XYZ9A99": {
        veiculo: "Volkswagen Gol 1.6",
        status: "Finalizado",
        etapas: [
            "✔ Diagnóstico realizado",
            "✔ Reparos concluídos",
            "✔ Teste finalizado",
            "✔ Pronto para retirada"
        ]
    }
};

function consultarServico(e) {
    e.preventDefault();

    const codigo = document.getElementById("codigoOuPlaca").value.trim().toUpperCase();
    const box = document.getElementById("resultadoServico");

    if (!codigo) {
        alert("Digite a placa ou o código do serviço.");
        return false;
    }

    if (bancoDemo[codigo]) {
        document.getElementById("r-veiculo").textContent = bancoDemo[codigo].veiculo;
        document.getElementById("r-status").textContent = bancoDemo[codigo].status;

        const etapasLista = document.getElementById("r-etapas");
        etapasLista.innerHTML = "";

        bancoDemo[codigo].etapas.forEach(etapa => {
            const li = document.createElement("li");
            li.textContent = etapa;
            etapasLista.appendChild(li);
        });

        box.style.display = "block";

    } else {
        alert("Serviço não encontrado. Verifique a placa ou código.");
        box.style.display = "none";
    }

    return false;
}
