// const input = '11100110';
// let output = 0;

// for (let i = input.length - 1, index = 0; i >= 0; i--, index++) {
//     output += input[i] * (2 ** index)
// }
// console.log(output)

const input = document.querySelector('.bin'),
      output = document.querySelector('.dec');

    let wrongResult
function binToDec(bin, currentFactor = bin.length - 1, startFactor = 0) {
    const regExp = /\D/gim;
    let answer = 0,
        zeroCount = bin.match(/0/gim) ? bin.match(/0/gim).length : 0,
        oneCount = bin.match(/1/gim) ? bin.match(/1/gim).length : 0;

    if ( bin.match(regExp) && (bin.match(regExp).length < bin.length) ) {
        // console.log('xt pf [eqyz');
        return wrongResult = `Проверьте введенные данные`;
    }
    if ( zeroCount + oneCount == bin.length ) {
        if (startFactor >= bin.length - 1) {
            return answer += bin[startFactor] * (2 ** currentFactor);
        } else {
            return answer = bin[startFactor] * (2 ** currentFactor) + binToDec(bin, --currentFactor, ++startFactor);
        }
    } else {
        return wrongResult = `Проверьте введенные данные`;
    }
}

input.addEventListener('input', () => {
    output.value = binToDec(input.value);
})
