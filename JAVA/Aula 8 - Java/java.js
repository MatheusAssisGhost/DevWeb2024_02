function enviarFormulario() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const observacao = document.getElementById("observacao").value;

    console.log("Nome:", nome);
    console.log("Telefone:", telefone);
    console.log("E-mail:", email);
    console.log("Observação:", observacao);
}