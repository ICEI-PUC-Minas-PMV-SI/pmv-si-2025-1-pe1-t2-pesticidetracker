document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("corpo-tabela");
  const form = document.getElementById("form-filtros");
  const nomeInput = document.getElementById("name");
  const classeSelect = document.querySelector("select[name='class']");
  const regiaoSelect = document.querySelector("select[name='region']");


  function getPesticidas() {
    return JSON.parse(localStorage.getItem("pesticidasMonitorados")) || [];
  }

  function setPesticidas(pesticidas) {
    localStorage.setItem("pesticidasMonitorados", JSON.stringify(pesticidas));
  }
  const renderTabela = (arr) => {
    tableBody.innerHTML = arr
      .map((p, i) => {

        return `
        <tr data-id="${i + 1}">
          <th scope="row">${i + 1}</th>
          <td>${p.nomecomum}<a></a></td>
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

   form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dados = new FormData(form);

    const filtro = {
      ptBrName: dados.get("nome")?.trim().toLowerCase() || "",
      classe: dados.get("classe")?.trim().toLowerCase() || "",
      aprovadoEm: dados.get("aprovadoEm")?.trim().toLowerCase() || ""
    };

    const pesticidas = getPesticidas()
    console.log(pesticidas)
    const resultado = pesticidas.filter(p =>{
      console.log(p)
      return (
        (filtro.nomecomum === ""?true:p.nomecomum.toLowerCase().includes(filtro.ptBrName)) 
        && 
        (p.hasOwnProperty('classe')? p.classe.toLowerCase().includes(filtro.classe): false) &&
        (filtro.aprovadoEm === ""? true :p.aprovado.toLowerCase().includes(filtro.aprovadoEm))
      
      )
    }
    );

    renderTabela(resultado);
  });

  function aplicarFiltro() {
    const filtro = {
      nome: nomeInput.value.trim(),
      classe: classeSelect.value,
      regiao: regiaoSelect.value
    };
    renderTabela(filtro);
  }

  document.addEventListener("click", (e) => {
    console.log(e)
    if (e.target.closest(".btn-remover")) {
      const row = e.target.closest("tr");
      console.log('row')
      console.log(row)
      const id = row.getAttribute("data-id");
      console.log(id)
      const pesticidas = getPesticidas();
      console.log(pesticidas)
      const novos = pesticidas.filter((_, index) => index !== id - 1);   
      console.log(novos)

      setPesticidas(novos);
      renderTabela(novos);
    }
  });

  renderTabela(Object.values(getPesticidas()));
});
