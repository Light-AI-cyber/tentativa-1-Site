document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // evita envio padrão

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (nome && cpf && email && senha) {
        window.location.href = "home.html"; // redireciona
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
