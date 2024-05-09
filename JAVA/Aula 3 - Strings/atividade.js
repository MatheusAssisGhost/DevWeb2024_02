document.getElementById('formularioCadastro').onsubmit = function(e) {
    e.preventDefault();
  
    // Obtém os valores dos inputs
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
  
    // Cria um objeto com os dados do usuário
    var usuario = {
      nome: nome,
      email: email
    };
  
    // Converte o objeto do usuário para uma string JSON
    var usuarioJson = JSON.stringify(usuario);
  
    // Salva a string JSON no LocalStorage
    localStorage.setItem('usuario', usuarioJson);
  
    // Limpa o formulário
    this.reset();
  
    alert('Usuário cadastrado com sucesso!');
  };
  
  // Para recuperar os dados do usuário
  var usuarioRecuperadoJson = localStorage.getItem('usuario');
  var usuarioRecuperado = JSON.parse(usuarioRecuperadoJson);
  console.log(usuarioRecuperado);
  