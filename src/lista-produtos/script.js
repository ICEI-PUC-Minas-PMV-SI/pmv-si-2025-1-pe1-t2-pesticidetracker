const list = `[{
    "id": "1",
    "nome": "Produto 1",  
    "pesticidas": ["Pesticida 1", "Pesticida 2"],
    "dataColheita": "01/05/2025",  
    "dataPlatio": "01/04/2025",
    "mercados": ["Brasil","União Européia"]
}]`;

const form = document.querySelector("form");
const btnBuscar = document.querySelector(".btn-buscar");
const btnCancelar = document.querySelector(".btn-cancelar");
const main = document.querySelector("main");
const pagina = 1;

btnBuscar.addEventListener("click", (e) => {
  const campos = form.querySelectorAll("input");
  const dadosFormulario = {};
  campos.forEach((campo) => {
    if (campo.value) {
      dadosFormulario[campo.name] = campo.value;
    }
  });

  filtrarDados(dadosFormulario);
});

btnCancelar.addEventListener("click", (e) => {
  const campos = form.querySelectorAll("input");
  campos.forEach((campo) => {
    campo.value = "";
  });
});

function filtrarDados(filtro) {
  const dados = JSON.parse(list);
  const tabela = criarTabela(dados);
  main.innerHTML += tabela;
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
            <td>${produto.dataPlatio}</td>
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

function criarPaginacao() {
  const paginacao = `<nav class="d-flex justify-content-center mt-4">
        <ul class="pagination custom-pagination">
          <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Próxima</a></li>
        </ul>
      </nav>`;
  main.innerHTML += paginacao;
}
