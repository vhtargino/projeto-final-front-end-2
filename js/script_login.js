function fazerLogin() {
    let emailUsuario = document.getElementById("email-login").value;
    let senhaUsuario = document.getElementById("password").value;

    let dadosLogin = {email: emailUsuario, senha: senhaUsuario};

    if (validarUsuario(dadosLogin)) {
        window.location.href = "area_admin.html";
        document.getElementById('login-form').reset();
    } else {
        alert("Usuário ou senha inválidos");
        document.getElementById('login-form').reset();
    }
}