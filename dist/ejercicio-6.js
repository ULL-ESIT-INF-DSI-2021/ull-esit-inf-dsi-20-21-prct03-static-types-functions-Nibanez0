let suma = 0;
function isValidISBN(cadena6) {
    //cadena6 = cadena6.replace(/[-]/g, " ");
    if ((cadena6.length < 10) || (cadena6.length > 10)) {
        return false;
    }
    for (let i = 0; i < cadena6.length; i++) {
        if ((cadena6[i] == "x") || (cadena6[i] == "X")) {
            suma += ((cadena6.length - i) * 10);
        }
        else {
            suma += (parseInt(cadena6[i]) * (cadena6.length - i)); //si no pones parseInt da erro cadena6[i]
        }
    }
    if (suma % 11 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const cadena6 = "3-598-28-8";
const cadena6R = isValidISBN(cadena6);
console.log(`${cadena6} ¿cadena válida? = ${cadena6R}`);
