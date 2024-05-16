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

function enviar() {
    const name = document.getElementById('name').value;
    const altura = document.getElementById('altura').value;
    const peso =document.getElementById('peso').value;
    
    console.log('Meu nome é:', name);
    console.log('Meu peso é:', peso);
    console.log('Minha altura é:', altura);
}