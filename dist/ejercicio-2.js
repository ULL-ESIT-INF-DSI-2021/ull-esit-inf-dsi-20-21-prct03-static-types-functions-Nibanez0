function decimalToFactorial(numero) {
    let total = 1;
    var N;
    while (numero > 1) {
        total *= numero;
        N = numero--;
        //console.log(`DtF = ${numero}`);
    }
    return total;
    //console.log(`DtF = ${N} + `);
}
function factorial(J) {
    if (J == 0) {
        return 1;
    }
    else {
        return J * factorial(J - 1);
    }
}
function factorialToDecimal(cadena2F) {
    let tam_cadena = cadena2F.length;
    let j = tam_cadena;
    let numero_dec = 0;
    for (let i = 0; i < cadena2F.length; i++) {
        let variable = parseInt(cadena2F[i]);
        variable = variable * factorial(j);
        numero_dec += variable;
        j--;
    }
    return numero_dec;
}
const numDtF = decimalToFactorial(7);
console.log(`DecimalToFactorial = ${numDtF}`);
const numFtD = factorialToDecimal("987");
console.log(`FactorialToDecimal = ${numFtD}`);
