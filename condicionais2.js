function receberNum(num1,num2) {
    if (num1 === num2) {
      console.log(`São iguais.`);
    } else {
        console.log('Não sao iguais.');
    }
}

receberNum(1,2)
receberNum(2,2)

let numero1 = prompt('digite um numero:')
let numero2 = prompt('digite outro numero:')

receberNum(+numero1,+numero2)  