let generoFilme = prompt('qual o genero do filme?')
let precoFilme = prompt('Qual o preço do filme?')
let preco = Number(precoFilme)

function filme(genero,preco){
    if(genero === 'fantasia' && preco < 15){
        console.log('Bom filme')
    } else {
        console.log('Escolha outro Filme :(');
    }
}

filme(generoFilme,preco)