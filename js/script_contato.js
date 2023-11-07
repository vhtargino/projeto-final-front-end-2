/* let dadosContato = {nome: "nome digitado pelo usuário", email: "email@email.com", mensagem: "mensagem digitada pelo usuário"};

let acesso = {email: "admin@admin.com", senha: "1234"}; */

let submitButton = document.getElementById("enviar-email");
submitButton = document.addEventListener("click", pegarDadosContato);

function pegarDadosContato() {
    let nomeUsuario = document.getElementById("nome").value;
    let emailUsuario = document.getElementById("email-contato").value;
    let mensagemUsuario = document.getElementById("mensagem").value;

    let dadosContato = {nome: nomeUsuario, email: emailUsuario, mensagem: mensagemUsuario};

    inserirMensagem(dadosContato);
}