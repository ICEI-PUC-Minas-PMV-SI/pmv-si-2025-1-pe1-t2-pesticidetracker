"use strict";

document.addEventListener("DOMContentLoaded", async() => {
  const corpoTabela = document.getElementById("corpo-tabela");
  const form = document.getElementById("form-filtros");
  const hoje = new Date().toLocaleDateString("pt-BR");

  let pesticidasIniciais = await fetch('../db/db.json')
  let pesticidas = await pesticidasIniciais.json()
  pesticidas = Object.values(pesticidas)

  function renderTabela(pesticidasFiltrados) {
    console.log(pesticidasFiltrados)
    if (pesticidasFiltrados.length === 0) {
      corpoTabela.innerHTML = `<tr><td colspan="4" class="text-center">Nenhum pesticida encontrado.</td></tr>`;
      return;
    }

    corpoTabela.innerHTML = pesticidasFiltrados.map(p => `
      <tr>
        <td>${p.ptBrName}</td>
        <td>${p.classe}</td>
        <td>${p.aprovadoEm}</td>
        <td>
          <a href="../detalhamento-pesticida/index.html?pesticida=${p.ptBrName}" class="btn btn-primary btn-sm rounded-pill custom-btn">
            <span class="me-1 text-white">Ver detalhes</span>
            <i class="bi bi-box-arrow-up-right"></i>
          </a>
        </td>
      </tr>
    `).join('');
  }

  renderTabela(pesticidas);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dados = new FormData(form);

    const filtro = {
      ptBrName: dados.get("nome")?.trim().toLowerCase() || "",
      classe: dados.get("classe")?.trim().toLowerCase() || "",
      aprovadoEm: dados.get("aprovadoEm")?.trim().toLowerCase() || ""
    };


    const resultado = pesticidas.filter(p =>{      
     return (
       (filtro.ptBrName === ""?true:p.ptBrName.toLowerCase().includes(filtro.ptBrName)) && 
       (p.hasOwnProperty('classe')? p.classe.toLowerCase().includes(filtro.classe): false) &&
       (filtro.aprovadoEm === ""? true :p.aprovadoEm.some(element => element.toLowerCase() === filtro.aprovadoEm))
      )
    }
    );

    renderTabela(resultado);
  });
});
