const input = '11100110';
let output = 0;

for (let i = input.length - 1, index = 0; i >= 0; i--, index++) {
    output += input[i] * (2 ** index)
}
let answer = 0;
function binToDec(bin, currentFactor = bin.length - 1, startFactor = 0) {
    if (startFactor >= bin.length - 1) {
        return answer += bin[startFactor] * (2 ** currentFactor);
    } else {
        return answer = bin[startFactor] * (2 ** currentFactor) + binToDec(bin, --currentFactor, ++startFactor);
    }
}

console.log(output)
console.log(binToDec(input))