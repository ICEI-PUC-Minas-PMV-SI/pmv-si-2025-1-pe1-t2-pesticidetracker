document.addEventListener("DOMContentLoaded", () => {
  const corpoTabela = document.getElementById("corpo-tabela");
  const form = document.getElementById("form-filtros");

  const pesticidasIniciais = [
      {
        id: "1",
        nome: "Acefato",
        classe: "Classe 1",
        aprovadoEm: "Japão, EUA, Europa",
        criadoEm: hoje
      },
      {
        id: "2",
        nome: "Glifosato",
        classe: "Classe 2",
        aprovadoEm: "Japão, EUA",
        criadoEm: hoje
      },
      {
        id: "3",
        nome: "Malationa",
        classe: "Classe 1",
        aprovadoEm: "Japão, EUA, Europa",
        criadoEm: hoje
      }
  ];

  if (!localStorage.getItem("pesticidas")) {
    localStorage.setItem("pesticidas", JSON.stringify(pesticidasIniciais));
  }

  const pesticidas = JSON.parse(localStorage.getItem("pesticidas")) || [];

  function renderTabela(pesticidasFiltrados) {
    if (!pesticidasFiltrados.length) {
      corpoTabela.innerHTML = `<tr><td colspan="4" class="text-center">Nenhum pesticida encontrado.</td></tr>`;
      return;
    }

    corpoTabela.innerHTML = pesticidasFiltrados.map(p => `
      <tr>
        <td>${p.nome}</td>
        <td>${p.classe}</td>
        <td>${p.aprovadoEm}</td>
        <td>
          <a href="../Detalhes-Pesticidas/index.html?pesticida=${p.id}" class="btn btn-primary btn-sm rounded-pill custom-btn">
            <span class="me-1">Ver detalhes</span>
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
      nome: dados.get("nome")?.trim().toLowerCase() || "",
      classe: dados.get("classe")?.trim().toLowerCase() || "",
      aprovadoEm: dados.get("aprovadoEm")?.trim().toLowerCase() || ""
    };

    const resultado = pesticidas.filter(p =>
      p.nome.toLowerCase().includes(filtro.nome) &&
      p.classe.toLowerCase().includes(filtro.classe) &&
      p.aprovadoEm.toLowerCase().includes(filtro.aprovadoEm)
    );

    renderTabela(resultado);
  });
});
