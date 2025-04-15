document.addEventListener('DOMContentLoaded', () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const perfilDiv = document.getElementById("perfilInfo");
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