function onePunch(cadena5: string) {
    let cadena5Final: string = " ";
   if(cadena5 == ` `) {
    //console.log(`${cadena5} --> BROKEN!`);
    return `Broken!`;
   }else {
        for(let i = 0; i < cadena5.length; i++) {
            if (cadena5[i] != "e" && cadena5[i] != "a") {
                cadena5Final += cadena5[i];
            }
        }
        return cadena5Final.split(" ").sort().join(" ");
   }
}

const cadena5: string = "Beard Jeans Hairbrush Knuckleduster Sand";
const cadena5R = onePunch(cadena5);
console.log(`${cadena5} --> ${cadena5R}`);

const cadena51: string = " ";
const cadena51R = onePunch(cadena51);
console.log(`${cadena51} --> ${cadena51R}`);