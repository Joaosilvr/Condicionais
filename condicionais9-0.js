// exercicio 9 

let resposta = prompt('digite sua idade')
let number = Number(resposta)

function idadeDirecao(num) {
    if (num >= 18) {
        console.log('pode dirigir');
    } else {
        console.log('nao pode dirigir');
    }
}
idadeDirecao(number)