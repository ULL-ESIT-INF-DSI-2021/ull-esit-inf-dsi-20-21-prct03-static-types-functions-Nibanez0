function onePunch(cadena5) {
    let cadena5Final = " ";
    if (cadena5 == ` `) {
        //console.log(`${cadena5} --> BROKEN!`);
        return `Broken!`;
    }
    else {
        for (let i = 0; i < cadena5.length; i++) {
            if (cadena5[i] != "e" && cadena5[i] != "a") {
                cadena5Final += cadena5[i];
            }
        }
        return cadena5Final.split(" ").sort().join(" ");
    }
}
const cadena5 = "Beard Jeans Hairbrush Knuckleduster Sand";
const cadena5R = onePunch(cadena5);
console.log(`${cadena5} --> ${cadena5R}`);
const cadena51 = " ";
const cadena51R = onePunch(cadena51);
console.log(`${cadena51} --> ${cadena51R}`);
