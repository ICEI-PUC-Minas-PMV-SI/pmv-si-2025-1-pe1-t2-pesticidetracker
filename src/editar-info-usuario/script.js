"use strict";

const user = JSON.parse(localStorage.getItem('user')); 

const form = document.querySelector("form.card");

const inputs = form.querySelectorAll("input")
inputs.forEach(input=> {
    if (input.tagName === 'INPUT' && input.type !== 'submit' && input.id in user ) {
        input.value = user[input.id] 
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    tratarFormulario();
});

const tratarFormulario = () => {
  const campos = form.querySelectorAll("input");
  campos.forEach((campo) => {
    if (campo.checkValidity()) {
      user[campo.id] = campo.value;
    }
  });

  localStorage.setItem("user", JSON.stringify(user));

  window.location = "../visualizar-info-usuario/";
}
