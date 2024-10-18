// exercicio 5

let dadosUsuario = prompt('voce concluiu ensino medio?(true or false)')
let dadosUsuario2 = prompt('tem 18 ou mais?(true or false)')
let dadosUsuario3 = prompt('nao está cursando outra faculdade?(true or false)')

function faculdade(se1,se2,se3) {
if (se1 === 'true' && se2 === 'true' && se3 === 'true') {
    return 'pode cursar'
} else {
    return 'nao pode cursar'
}
}

console.log(faculdade(dadosUsuario,dadosUsuario2,dadosUsuario3));
