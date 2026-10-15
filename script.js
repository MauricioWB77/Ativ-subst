function informaçao() {

    let nome = prompt("digite seu nome");
    alert("Bem-vindo, " + nome + "! Vamos informar seus dados.");

    let salariomensal = parsefloat(prompt("Digite seu Salário mensal:"));
    alert("Seu salario é R$ " + salariomensal.tofixed(2));

    let aliemntacao = parsefloat(prompt("digite seu gasto com alimentação mensal:"));
    alert("Seu gasto com alimentação é R$ " + alimentacao.tofixed(2));

    let saldo = salariomensal - alimentacao;
    alert("Seu saldo final é R$ " + saldo.tofixed(2) + ". ");
}