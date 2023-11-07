let mensagensAdmin = obterMensagens();

let tabelaPai = document.getElementById("table-mensagens");

mensagensAdmin.forEach(element => {
    let nome = element[1];
    let email = element[2];
    let mensagem = element[3];
});