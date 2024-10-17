function receberNum(num1,num2) {
    if (num1 > num2) {
      console.log(`é maior`);
    } else if (num1 < num2) {
        console.log('é menor');
    } else if (num1 === num2) {
        console.log('é igual');
    }
}

receberNum(1,2)
receberNum(3,2)
receberNum(2,2)

let numero1 = prompt('digite um numero:')
let numero2 = prompt('digite outro numero:')

receberNum(+numero1,+numero2)  