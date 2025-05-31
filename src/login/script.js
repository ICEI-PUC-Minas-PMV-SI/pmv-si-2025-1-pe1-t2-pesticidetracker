document.querySelector("form.login").addEventListener("submit", function(e) {
   e.preventDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.senha === senha){
        alert("Bem vindo!");

        window.location.href = "../cadastro-produto";

    } else {
        alert("Usuário ou senha inválidos. Tente novamente!");
    }

})