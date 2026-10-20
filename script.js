const usuarioCorreto = "admin";
const senhaCorreta = "12345";
const maxTentativas = 3;
let logado = false;

for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
    let usuarioInput = prompt(`[Tentativa ${tentativa} de ${maxTentativas}] Digite o usuário:`);
    let senhaInput = prompt(`[Tentativa ${tentativa} de ${maxTentativas}] Digite a senha:`);
    
    if (usuarioInput === usuarioCorreto && senhaInput === senhaCorreta) {
        alert("Login efetuado com sucesso! Bem-vindo.");
        logado = true;
        break;
    }


    if (tentativa < maxTentativas) {
        alert(`Dados incorretos! você ainda tem ${maxTentativas - tentativa} tentativa(s).`);
    }
}


if (!logado) {
    alert("Numero maximo de tentativas excedido! sua conta foi bloqueada por sergurança.");
}