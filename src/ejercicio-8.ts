function contandoIPS(IP1: string, IP2: string) {
    let IP1cad = IP1.split(".");
    let IP2cad = IP2.split(".");
    let contador = 0;
    let rango = 1;

}

const cadena81: string = "10.0.0.0";
const cadena82: string = "10.0.0.50";
const cadena8R = contandoIPS(cadena81, cadena82);
console.log(`${cadena81}, ${cadena82} = ${cadena8R}`);