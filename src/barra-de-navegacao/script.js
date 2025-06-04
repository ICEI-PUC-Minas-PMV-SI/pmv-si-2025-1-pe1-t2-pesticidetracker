document.addEventListener("DOMContentLoaded", function() {

    const liNome = document.getElementById("usuario");
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.nome) {
        liNome.textContent = `${user.nome}`;

    }else {
        liNome.textContent = "Visitante";
    }
})