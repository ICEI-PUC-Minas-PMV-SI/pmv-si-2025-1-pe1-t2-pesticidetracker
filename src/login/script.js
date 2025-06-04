document.querySelector("form.login").addEventListener("submit", function(e) {
   e.preventDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const user = JSON.parse(localStorage.getItem("user"));
    const mensagemModal = document.getElementById("mensagem-modal");
    const modal = new bootstrap.Modal(document.getElementById("modalLogin"));

    if (user && user.email === email && user.senha === senha){
        mensagemModal.textContent = `Login realizado com sucesso! Seja bem vindo(a) ${user.nome}`;
        modal.show();

        setTimeout(() => {
            window.location.href = "../cadastro-produto";
        }, 2000);        

    } else {
        mensagemModal.textContent = "Usuário ou senha inválidos. Tente novamente!";
        modal.show();
    }

})