function fromSnakeToCamelCase(cadena1) {
    let cadena1Conv = " ";
    for (let i = 0; i < cadena1.length; i++) {
        if (cadena1[i] == "_") {
            cadena1Conv += cadena1[i + 1].toUpperCase();
            i++;
        }
        else {
            cadena1Conv += cadena1[i];
        }
    }
    return cadena1Conv;
}
const cadena1 = "sample_string";
const cadenaR = fromSnakeToCamelCase(cadena1);
console.log(`${cadena1} fromSnakeToCame = ${cadenaR}`);
function fromCamelToSnakeCase(cadena2) {
    let cadena2Conv = " ";
    for (let i = 0; i < cadena2.length; i++) {
        if (cadena2[i] == cadena2[i].toUpperCase()) {
            cadena2Conv += "_" + cadena2[i].toLowerCase();
            i++;
        }
        else {
            cadena2Conv += cadena2[i];
        }
    }
    return cadena2Conv;
}
const cadena2 = "sampleString";
const cadena2R = fromCamelToSnakeCase(cadena2);
console.log(`${cadena2} fromCameToSnake = ${cadena2R}`);
