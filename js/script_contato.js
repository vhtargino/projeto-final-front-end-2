function pegarDadosContato() {
    let nomeUsuario = document.getElementById("nome").value;
    let emailUsuario = document.getElementById("email-contato").value;
    let mensagemUsuario = document.getElementById("mensagem").value;

    let dadosContato = {nome: nomeUsuario, email: emailUsuario, mensagem: mensagemUsuario};

    inserirMensagem(dadosContato);

    document.getElementById('contato-form').reset();
}