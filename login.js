document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) {
    alert("Nenhum usuário cadastrado. Redirecionando para o cadastro.");
    window.location.href = "cadastro.html";
    return;
  }

  if (usuario.email === email && usuario.senha === senha) {
    localStorage.setItem("logado", "true");
    window.location.href = "index.html";
  } else {
    alert("Email ou senha inválidos! Verifique ou cadastre-se.");
  }
});
