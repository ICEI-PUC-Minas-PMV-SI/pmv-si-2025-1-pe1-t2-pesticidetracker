const form = document.querySelector("form.cadastro");

form.addEventListener("submit", function (e) {
  if (this.checkValidity()) {
    e.preventDefault();
    tratarFormulario();
  }
});

function tratarFormulario() {
  const campos = form.querySelectorAll("input");
  let dadosFormulario = {};
  campos.forEach((campo) => {
    if (campo.checkValidity()) {
      dadosFormulario[campo.name] = campo.value;
    }
  });

  localStorage.setItem("user", JSON.stringify(dadosFormulario));

  window.location = "../login/";
}
