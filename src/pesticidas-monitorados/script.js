document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("corpo-tabela");
  const nomeInput = document.getElementById("name");
  const classeSelect = document.querySelector("select[name='class']");
  const regiaoSelect = document.querySelector("select[name='region']");


  function getPesticidas() {
    return JSON.parse(localStorage.getItem("pesticidasMonitorados")) || [];
  }

  function setPesticidas(pesticidas) {
    localStorage.setItem("pesticidasMonitorados", JSON.stringify(pesticidas));
  }

  function renderTabela(filtro = {}) {
    const pesticidas = getPesticidas();
    let resultado = Object.values(pesticidas);
    console.log(resultado)
    if (filtro.nome) {
      resultado = resultado.filter(p =>
        p.nome.toLowerCase().includes(filtro.nome.toLowerCase())
      );
    }

    if (filtro.classe && filtro.classe !== "Selecione uma classe") {
      resultado = resultado.filter(p =>
        p.classe.toLowerCase().includes(filtro.classe.toLowerCase())
      );
    }

    if (filtro.regiao && filtro.regiao !== "Selecione uma região") {
      resultado = resultado.filter(p =>
        p.aprovadoEm.toLowerCase().includes(filtro.regiao.toLowerCase())
      );
    }

    console.log(resultado)
    
    tableBody.innerHTML = resultado
      .map((p, i) => {
        console.log(p)
        return `
        <tr data-id="${p.id}">
          <th scope="row">${i + 1}</th>
          <td>${p.nomecomum}</td>
          <td>${p.banido}</td>
          <td>${p.criadoEm || '-'}</td>
          <td>
            <button class="btn btn-danger btn-remover">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>`;
      })
      .join("");
  }

  function aplicarFiltro() {
    const filtro = {
      nome: nomeInput.value.trim(),
      classe: classeSelect.value,
      regiao: regiaoSelect.value
    };
    renderTabela(filtro);
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest(".btn-remover")) {
      const row = e.target.closest("tr");
      const id = row.getAttribute("data-id");
      const pesticidas = getPesticidas();
      const novos = pesticidas.filter(p => p.id !== id);
      setPesticidas(novos);
      renderTabela();
    }
  });

  nomeInput.addEventListener("input", aplicarFiltro);
  classeSelect.addEventListener("change", aplicarFiltro);
  regiaoSelect.addEventListener("change", aplicarFiltro);

  renderTabela();
});
