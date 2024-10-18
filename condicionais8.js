// exercicio 8

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)


// a) O que a primeira linha está fazendo?
// esta pedindo para digitar o primeiro numero e dizendo que a variavel numero é igual ao numero que o usuario digitou


// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

// numero 10 dira que passou no teste
// numero -10 nao ira imprimir nada por que a mensagem nao recebeu um else por exemplo


// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// vai haver um erro pois o let mensagem nao está em um else if ou else