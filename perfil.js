document.addEventListener('DOMContentLoaded', () => {
  const logado = localStorage.getItem("logado");
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const perfilDiv = document.getElementById("perfilInfo");

  if (!logado) {
    window.location.href = "login.html";
    return;
  }

  if (usuario && perfilDiv) {
    perfilDiv.innerHTML = `
      <p><strong>Nome:</strong> ${usuario.nome}</p>
      <p><strong>Email:</strong> ${usuario.email}</p>
      <p><strong>Endereço:</strong> ${usuario.endereco}</p>
    `;
  }
});

function voltar() {
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("logado");
  window.location.href = "login.html";
}
