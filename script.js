const usuarioCorreto = "admin";
const senhaCorreta = "12345";

let loginSucesso = false;

while (!loginSucesso) {
    let usuarioDigitado = prompt("Digite o seu usuário:");
    let senhaDigitada = prompt("digite a sua Senha:");

    if (usuarioDigitado ===usuarioCorreto && senhaDigitada === senhaCorreta) {
        alert("Login efetuado com sucesso! Bem-vindo.");
        loginSucesso = true;
    } else {
        alert("Usuario ou senha incorretos. tente novamente!");
    }
    
}