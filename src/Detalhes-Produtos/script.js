// Exemplo de produtos:
// [
//     {
//       "dataColheita": "2025-06-27",
//       "dataPlantio": "2025-06-11",
//       "id": 1749583800756,
//       "mercados": [
//         "Japão"
//       ],
//       "nome": "Café",
//       "pesticidas": [
//         "Acefato"
//       ]
//     }
//   ]


document.addEventListener("DOMContentLoaded", () => {
  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  const id = new URLSearchParams(window.location.search).get("produto");
  const produto = produtos.find((prod) => prod.id === Number(id));

  fillProductInfo(produto);
  createRegulatoryTable(produto.pesticidas);
});

function fillProductInfo(produto) {
  const nomeProduto = document.getElementById("nome-produto");
  const dataPlantioElement = document.getElementById("data-plantio");
  const dataColheitaElement = document.getElementById("data-colheita");
  const pesticidasUtilizados = document.getElementById("pesticidas-utilizados");
  const mercados = document.getElementById("mercados");

  nomeProduto.textContent = produto.nome;
  dataPlantioElement.textContent = formatDateString(produto.dataPlantio);
  dataColheitaElement.textContent = formatDateString(produto.dataColheita);
  pesticidasUtilizados.textContent = produto.pesticidas.join(", ");
  mercados.textContent = produto.mercados.join(", ");
}

function formatDateString(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("pt-BR");
}

function createRegulatoryTable(pesticidasUtilizados) {
  const pesticidasDb = JSON.parse(localStorage.getItem("pesticidas")) || [];

  const tableContainer =
    document.querySelector(".approval-table").parentElement;
  const existingTable = document.querySelector(".approval-table");

  const table = document.createElement("table");
  table.className = "approval-table";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `
    <th>Pesticida utilizado</th>
    <th>Brasil</th>
    <th>Japão</th>
    <th>EUA</th>
    <th>Europa</th>
  `;
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  const overallApproval = {
    Brasil: true,
    Japão: true,
    EUA: true,
    Europa: true,
  };

  pesticidasUtilizados.forEach((pesticidaNome) => {
    const pesticidaInfo = pesticidasDb.find((p) => p.nome === pesticidaNome);
    const row = document.createElement("tr");

    if (pesticidaInfo && pesticidaInfo.aprovadoEm) {
      const aprovadoEm = pesticidaInfo.aprovadoEm;

      const brasilApproved = aprovadoEm.includes("Brasil");
      const japaoApproved = aprovadoEm.includes("Japão");
      const euaApproved = aprovadoEm.includes("EUA");
      const europaApproved = aprovadoEm.includes("Europa");

      // Update overall approval status
      if (!brasilApproved) overallApproval.Brasil = false;
      if (!japaoApproved) overallApproval.Japão = false;
      if (!euaApproved) overallApproval.EUA = false;
      if (!europaApproved) overallApproval.Europa = false;

      row.innerHTML = `
        <td>${pesticidaNome}</td>
        <td><span class="${brasilApproved ? "check" : "cross"}">${brasilApproved ? "✓" : "✗"}</span></td>
        <td><span class="${japaoApproved ? "check" : "cross"}">${japaoApproved ? "✓" : "✗"}</span></td>
        <td><span class="${euaApproved ? "check" : "cross"}">${euaApproved ? "✓" : "✗"}</span></td>
        <td><span class="${europaApproved ? "check" : "cross"}">${europaApproved ? "✓" : "✗"}</span></td>
      `;
    } else {
      overallApproval["Brasil"] = false;
      overallApproval["Japão"] = false;
      overallApproval["EUA"] = false;
      overallApproval["Europa"] = false;

      row.innerHTML = `
        <td>${pesticidaNome}</td>
        <td><span class="cross">✗</span></td>
        <td><span class="cross">✗</span></td>
        <td><span class="cross">✗</span></td>
        <td><span class="cross">✗</span></td>
      `;
    }

    tbody.appendChild(row);
  });

  // Add summary row
  const summaryRow = document.createElement("tr");
  summaryRow.innerHTML = `
    <td><strong>Pode ser vendido</strong></td>
    <td><span class="${overallApproval["Brasil"] ? "check" : "cross"}">${
    overallApproval["Brasil"] ? "✓" : "✗"
  }</span></td>
    <td><span class="${overallApproval["Japão"] ? "check" : "cross"}">${
    overallApproval["Japão"] ? "✓" : "✗"
  }</span></td>
    <td><span class="${overallApproval["EUA"] ? "check" : "cross"}">${
    overallApproval["EUA"] ? "✓" : "✗"
  }</span></td>
    <td><span class="${
      overallApproval["Europa"] ? "check" : "cross"
    }">${overallApproval["Europa"] ? "✓" : "✗"}</span></td>
  `;
  tbody.appendChild(summaryRow);

  table.appendChild(tbody);

  // Replace existing table
  tableContainer.replaceChild(table, existingTable);
}
