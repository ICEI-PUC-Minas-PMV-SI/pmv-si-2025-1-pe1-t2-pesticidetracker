const list = localStorage.getItem("produtos")
  ? JSON.parse(localStorage.getItem("produtos"))
  : [];
`[
{"id": "1","nome": "Produto 1","pesticidas": [],"dataColheita": "01/05/2025","dataPlatio": "01/04/2025","mercados": []},
{"id": "2","nome": "Produto 2","pesticidas": [],"dataColheita": "01/05/2025","dataPlatio": "01/04/2025","mercados": []},
{"id": "3","nome": "Produto 3","pesticidas": [],"dataColheita": "01/05/2025","dataPlatio": "01/04/2025","mercados": []}
]`;

const form = document.querySelector("form");
const btnBuscar = document.querySelector(".btn-buscar");
const btnCancelar = document.querySelector(".btn-cancelar");
const tabelaContainer = document.getElementById("tabela");
const paginacaoContainer = document.getElementById("paginacao");
const totalDeItensPorPagina = 10;
let pagina = 1;

btnBuscar.addEventListener("click", () => {
  pagina = 1;
  buscarDadosFiltro();
});

btnCancelar.addEventListener("click", () => {
  const campos = form.querySelectorAll("input");
  campos.forEach((campo) => {
    campo.value = "";
  });
});

paginacaoContainer.addEventListener("click", (e) => {
  const target = e.target;
  if (target.matches(".page-link[data-pagina]")) {
    pagina = parseInt(target.getAttribute("data-pagina"), 10);
    buscarDadosFiltro();
  }
});

function buscarDadosFiltro() {
  const campos = form.querySelectorAll("input");
  const dadosFormulario = {};
  campos.forEach((campo) => {
    if (campo.value) {
      dadosFormulario[campo.name] = campo.value;
    }
  });

  filtrarDados(dadosFormulario);
}

function filtrarDados(filtro) {
  const dados = list;

  const dadosFiltrados = dados.filter((item) => {
    if (
      filtro.nome &&
      !item.nome.toLowerCase().includes(filtro.nome.toLowerCase())
    ) {
      return false;
    }

    if (filtro.dataPlantio && item.dataPlantio !== filtro.dataPlantio) {
      return false;
    }

    if (filtro.dataColheita && item.dataColheita !== filtro.dataColheita) {
      return false;
    }

    return true;
  });

  if (dadosFiltrados?.length) {
    const inicio = (pagina - 1) * totalDeItensPorPagina;
    const fim = inicio + totalDeItensPorPagina;
    const dadosPaginados = dadosFiltrados.slice(inicio, fim);
    const tabela = criarTabela(dadosPaginados);
    tabelaContainer.innerHTML = tabela;

    const paginacao = criarPaginacao(
      pagina,
      dadosFiltrados.length,
      totalDeItensPorPagina
    );
    paginacaoContainer.innerHTML = paginacao;
  } else {
    tabelaContainer.innerHTML = "<p class='mt-4'>Nenhum dado encontrado!</p>";
    paginacaoContainer.innerHTML = "";
  }
}

function criarTabela(dados) {
  let tabela = "<table class='table table-striped align-middle mt-4'>";
  tabela += criarCabecalhoTabela();
  tabela += criarCorpoTabela(dados);
  tabela += "</table>";
  return tabela;
}

function criarCabecalhoTabela() {
  return `<thead>
          <tr>
            <th class="w-25">Nome</th>
            <th class="w-25">Data de plantio</th>
            <th class="w-25">Data de colheita</th>
            <th class="w-25"></th>
          </tr>
        </thead>`;
}

function criarCorpoTabela(dados) {
  let corpo = "<tbody>";
  dados.forEach((produto) => {
    corpo += criarLinhaTabela(produto);
  });
  corpo += "</tbody>";
  return corpo;
}

function criarLinhaTabela(produto) {
  return `<tr>
            <td>${produto.nome}</td>
            <td>${produto.dataPlantio}</td>
            <td>${produto.dataColheita}</td>
            <td>
              <a
                href="../Detalhes-Produtos/index.html?produto=${produto.id}"
                class="btn btn-primary btn-sm rounded-pill custom-btn"
              >
                <span class="me-1">Ver detalhes</span>
                <i class="bi bi-box-arrow-up-right"></i>
              </a>
            </td>
          </tr>`;
}

function criarPaginacao(pagina, totalDeItems, totalDeItensPorPagina) {
  const totalPaginas = Math.ceil(totalDeItems / totalDeItensPorPagina);
  let html = '<nav class="d-flex justify-content-center mt-4">';
  html += '<ul class="pagination custom-pagination">';

  if (pagina > 1) {
    html += `<li class="page-item"><span class="page-link" data-pagina="${
      pagina - 1
    }">Anterior</a></li>`;
  } else {
    html += `<li class="page-item disabled"><span class="page-link">Anterior</span></li>`;
  }

  for (let i = 1; i <= totalPaginas; i++) {
    if (i === pagina) {
      html += `<li class="page-item active"><span class="page-link">${i}</span></li>`;
    } else {
      html += `<li class="page-item"><span class="page-link" data-pagina="${i}">${i}</span></li>`;
    }
  }

  if (pagina < totalPaginas) {
    html += `<li class="page-item"><span class="page-link" data-pagina="${
      pagina + 1
    }">Próxima</span></li>`;
  } else {
    html += `<li class="page-item disabled"><span class="page-link">Próxima</span></li>`;
  }

  html += "</ul></nav>";
  return html;
}
