function contandoIPS(IP1, IP2) {
    let IP1cad = IP1.split(".");
    let IP2cad = IP2.split(".");
    let contador = 0;
    let rango = 1;
    for (let i = IP1cad.length - 1; i >= 0; i--) {
        contador += ((parseInt(IP2cad[i]) - parseInt(IP1cad[i])) * rango);
        rango *= 256;
    }
    return contador;
}
const cadena81 = "10.0.0.0";
const cadena82 = "10.0.0.50";
const cadena8R = contandoIPS(cadena81, cadena82);
console.log(`${cadena81}, ${cadena82} = ${cadena8R}`);
