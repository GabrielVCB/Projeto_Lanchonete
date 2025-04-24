document.getElementById("cadastroForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senha").value;
  
    const usuario = {
      nome,
      endereco,
      email,
      telefone,
      senha
    };
  
    localStorage.setItem("usuario", JSON.stringify(usuario));
    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
  });
  