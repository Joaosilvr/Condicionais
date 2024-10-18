// exercicio 6

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
​
// a) Explique o que o código faz. Qual o teste que ele realiza? 
// codigo testa se o resto da divisao do numero é igual a 0, se nao for diz que nao passou no teste


// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// numeros pares


// c) Para que tipos de números a mensagem é "Não passou no teste"? 
// numeros impares