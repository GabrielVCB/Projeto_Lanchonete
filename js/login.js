document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail")?.value;
    const senha = document.getElementById("loginSenha")?.value;
    const usuario = JSON.parse(localStorage.getItem("usuario"));
  
    if (usuario && usuario.email === email && usuario.senha === senha) {
      localStorage.setItem("logado", "true");
      window.location.href = "index.html";
    } else {
      alert("Credenciais inválidas!");
    }
  });
  