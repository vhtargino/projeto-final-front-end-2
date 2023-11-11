function fazerLogin() {
    let emailUsuario = document.getElementById("email-login").value;
    let senhaUsuario = document.getElementById("password").value;

    let dadosLogin = {email: emailUsuario, senha: senhaUsuario};
    
    let retornoValidacao = validarUsuario(dadosLogin);

    if (retornoValidacao) {
        window.location.replace("../area_admin.html");
    } else {
        alert("Usuário ou senha inválidos");
    }
}