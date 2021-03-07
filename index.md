# ull-esit-inf-dsi-20-21-prct03-static-types-functions-Nibanez0
ull-esit-inf-dsi-20-21-prct03-static-types-functions-Nibanez0 created by GitHub Classroom
# Informe práctica 3: Tipos de datos estáticos y funciones

```
Noelia Ibáñez Silvestre
Práctica 3- Desarrollo de Sistemas Informáticos
Universidad de La Laguna
```

## Objetivo
El objetivo de esta práctica es conocer los tipos de datos estáticos y las funciones en TypeScript.

## Pasos previos
1. Aceptar la asignacion de GitHub Classroom asociada a esta práctica.
2. Creación del proyecto.

## Creación y configuración del proyecto
Para crear y configurar el proyecto partimos de la [guía](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html) proporcionada por el profesor y ajustando las siguientes configuraciones:

**package.json**
```
{
  "name": "practica3",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

**tsconfig.json**
```
"target": "ES2020",
"module": "commonjs", 
"declaration": true,  
"outDir": "./dist",
 "rootDir": "./src", 
```

## Ejercicios
### Ejercicio 1 - Años bisiestos
Para este ejercicio, se crea una función llamada `isLeapYear` la cual va a recibir como parámetro un año. A continuación, se comprueba, con un condicional **if**, que dicho año sea divisble por 4 y NO sea divible por 100, además, puede ser divisble por 400.

El código es:

```typescript
function isLeapYear(anyo) {
    if ((anyo % 4 == 0) && (anyo % 100 != 0) || (anyo % 400 == 0)) {
        return true;
    }else {
        return false;
    }
}

const iLP = isLeapYear(2000);
console.log(`¿Año bisiesto? = ${iLP}`);

const iLP2 = isLeapYear(1999);
console.log(`¿Año bisiesto? = ${iLP2}`);
```

Y la salida:
```
[~/practica3()]$node dist/ejercicio-1.js
¿Año bisiesto? = true
¿Año bisiesto? = false
```

### Ejercicio 2 - Notación decimal y factorial
Para esta actividad eran necesarias crear 2 funciones (`decimalToFactorial`) y (`factorialToDecimal`), la primera debe convertir un número decimal a factorial y la segunda al contrario, es decir, pasar de factorial a decimal. 

Respecto a la primera función (`decimalToFactorial`), le pasamos como parámetro un número, creamos una variable llamada `total` que se encargará de acumular el resulatdo y una variable `N` que irá decrementando el número. A continuación, creamos un bucle **while** para calcular el factorial.

```typescript
function decimalToFactorial (numero) {
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

const numDtF = decimalToFactorial (7);
console.log(`DecimalToFactorial = ${numDtF}`);
```

Para `factorialToDecimal` es el proceso al contrario, le introducimos una cadena que será la representación en factorial (omitiendo los signos) y empezamos a recorrerla a la vez que revertimos la conversión. Para ello, usamos una función auxiliar llamada `factorail`.

```typescript
function factorial(J) {
   if (J == 0) {
       return 1;
   }else {
       return J * factorial(J-1);
   }
}

function factorialToDecimal (cadena2F: string) {
    let tam_cadena = cadena2F.length;
    let j = tam_cadena;
    let numero_dec = 0;
    for(let i = 0; i < cadena2F.length; i++) {
        let variable = parseInt(cadena2F[i]);
        variable = variable * factorial(j);
        numero_dec += variable;
        j--;
    }
    return numero_dec;
}
const numFtD = factorialToDecimal ("987");
console.log(`FactorialToDecimal = ${numFtD}`);
```

Salida:
```
DecimalToFactorial = 5040 //7
FactorialToDecimal = 77 //"987"
```

### Ejercicio 4 - Conversor de estilo
En este ejercicio han sido necesarias 2 funciones, `fromSnakeToCamelCase` y `fromCamelToSnakeCase`. 

En la primera, queremos pasar de **sample_string** a **sampleString**. Para ello, la función recibe la cadena que se quiere convertir y además, se crea una cadena auxiliar que contendrá la conversión, en este caso **cadena1Conv**. A continuación, empezamos a recorer la cadena posición por posición en busca de **_**. Si no se encuentra en esa posición se irá "copiando" la misma cadena en **cadena1Conv** y en caso contrario, la posición 'i' pasa a ser la siguiente ('i+1') que corresponde a una letra y además, se pondrá en mayúscula usando `toUpperCase`. La función devuelve **cadena1Conv**

En cambio, `fromCamelToSnakeCase` es lo contrario.Para ello, recorremos la cadena buscando la primera letra mayúscula. En caso de que no la encuentra, se irá "copiando" la cadena en **cadena2Conv** y en caso contrario, a la posición actual 'i' se le añade '_' y avanza una posición ('i+1') pasando a minúcula con `toLowerCase`. La función devuelve **cadena2Conv**.

Código:

```typescript
function fromSnakeToCamelCase(cadena1: string) {
    let cadena1Conv: string = " ";
    for(let i = 0; i < cadena1.length; i++) {
        if(cadena1[i] == "_") {
            cadena1Conv += cadena1[i+1].toUpperCase();
            i++; 
        }else {
            cadena1Conv += cadena1[i];
        }
    }
    return cadena1Conv;
}

const cadena1: string = "sample_string";
const cadenaR = fromSnakeToCamelCase(cadena1);
console.log(`${cadena1} fromSnakeToCame = ${cadenaR}`);

function fromCamelToSnakeCase(cadena2: string) {
    let cadena2Conv: string = " ";
    for(let i = 0; i < cadena2.length; i++) {
        if(cadena2[i] == cadena2[i].toUpperCase()) {
            cadena2Conv += "_" + cadena2[i].toLowerCase();
            i++;
        }else {
            cadena2Conv += cadena2[i];
        }
    }
    return cadena2Conv;
}

const cadena2: string = "sampleString";
const cadena2R = fromCamelToSnakeCase(cadena2);
console.log(`${cadena2} fromCameToSnake = ${cadena2R}`);
```

Salida:
```
[~/practica3()]$node dist/ejercicio-4.js
sample_string fromSnakeToCame =  sampleString
sampleString fromCameToSnake =  sample_sring
```

### Ejercicio 5 - Un solo golpe

En este ejercicio se espera como resultado una cadena de caracteres **separadas, ordenadas y unidas de nuevo** y, además, que se eliminen todas las **e** y **a**.Para ello, creamos la función `onePunch` que recibe una cadena como parámetro. Se crea otra cadena inicialmente vacía y en este caso denominada **cadena5Final**. Comparamos si **cadena5** está vacía, en caso de que así sea devuelve **BROKEN!** y si no es así, empezamos a recorrer con un bucle 'for' la cadena y comparamos si son letras 'e' y 'a' a la vez que vamos guardando el resultado (sin coger 'e' y 'a') en **cadena5Final**. Una vez termina, devuelve **cadena5Final** habiendo separado las palabras ( **split()**), ordenándolas (**sort()**) y volviendo a unirlas (**join()**).

Código:
```typescript
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
```

Salida:
```
[~/practica3()]$node dist/ejercicio-5.js
Beard Jeans Hairbrush Knuckleduster Sand -->  Brd Hirbrush Jns Knuckldustr Snd
  --> Broken!
```

### Ejercicio 6 - Validación ISBN
En esta actividad, la función `isValidISBN` recibe como paŕametro una cadena con un código y debe devolver si dicha cadena es válidda o no. Para ello, la función recorre dicha cadena comprobando las dimensiones, posteriormente se recorre la cadena y se extraen cada dígito para multiplicarlo por la posición (se almacena en la variable suma). Una vez termina de recorrer la cadena, se hace **suma % 11** y tiene que ser igual a 0 para que la cadena sea válida.
```typescript
let suma = 0;

function isValidISBN(cadena6: string) {

    if((cadena6.length < 10) || (cadena6.length > 10)) {
        return false;
    }

    for(let i = 0; i < cadena6.length; i++) {
        if((cadena6[i] == "x") || (cadena6[i] == "X")) {
            suma += ((cadena6.length - i) * 10);
        } else {
            suma += (parseInt(cadena6[i])* (cadena6.length - i)); //parseInt extrae el dígito
        }
    }

    if(suma % 11 == 0) {
        return true;
    }else {
        return false;
    }
}

const cadena6: string = "3-598-28-8";
const cadena6R = isValidISBN(cadena6);
console.log(`${cadena6} ¿cadena válida? = ${cadena6R}`);
```

Salida:
```
$node dist/ejercicio-6.js
3-598-28-8 ¿cadena válida? = false
```

### Ejercicio 9 - Entrenador Pokemon
En este ejercicio hay que crear una función que reciba, mediante cadenas, los tipos de Pokemon que se enfrentan y sus respectivas capacidades de ataque. 

Para ello, creamos una función denominada `ataque` que recibe los parámetros mencionados anteriormente.
Dentro de la función, definimos el daño total que hará según efectividad de la siguiente manera, siendo `sup_efec = super efectivo`, `poc_efec = poco efectivo` y `norm_ = neutral`:

```typescript
    let sup_efec = 50 * (ataqA/defB) * 2;
    let poc_efec = 50 * (ataqA/defB) * 0.5;
    let norm_ = 50 * (ataqA/defB);
```

Una vez definidos los ataques, utilizamos `switch case()` pasándole como parámetro principal el denominado `pokA` que tendrá 4 opciones: fuego, agua, hierba y eléctrico. A su vez, cada opción será comparada con `pokB` devolviendo mediante `return` el daño según efectividad. Para determinar que nivel de efectividad tendrían se utilizaron las siguientes reglas, de manera simétrica (si pokA es super efectivo sobre pokB, entonces pokB será poco efectivo contra pokA):

    fuego > hierba
    fuego < agua
    fuego = eléctrico
    agua < hierba
    agua < eléctrico
    hierba = eléctrico

El código sería:
```typescript
function ataque(pokA: string, pokB: string, ataqA: number, defB: number) {
    let sup_efec = 50 * (ataqA/defB) * 2;
    let poc_efec = 50 * (ataqA/defB) * 0.5;
    let norm_ = 50 * (ataqA/defB);

    switch(pokA) {
        case `fuego`: {
           if(pokB == `hierba`) {
               return sup_efec;
           }else if((pokB == `agua`) || (pokB == `fuego`)) {
                return poc_efec;
           }else {
               return norm_;
           }
        }

        case `agua`: {
            if((pokB == `hierba`) || (pokB == `agua`) || (pokB == `electrico`)) {
                return poc_efec;
            }else {
                return sup_efec;
            }
        }

        case `hierba`: {
            if((pokB == `fuego`) || (pokB == `hierba`)) {
                return poc_efec;
            }else if (pokB == `agua`) {
                return sup_efec;
            }else {
                return norm_;
            }
        }

        case `electrico`: {
            if((pokB == `hierba`) || (pokB == `fuego`)) {
                return norm_;
            }else if (pokB == `electrico`) {
                return poc_efec;
            }else {
                return sup_efec;
            }
        }
    }
}
const pok1 = `fuego`;
const pok2 = `agua`;
const pok3 = `hierba`;
const pok4 = `electrico`;

const batalla1 = ataque(pok1, pok2, 150, 321);
console.log(`Batalla entre ${pok1} y ${pok2} = ${batalla1}`);
```
Y la salida:
```
[~/practica3()]$node dist/ejercicio-9.js
Batalla entre fuego y agua = 11.682242990654206
```

### Ejercicio 10 - Validador de nombre de usuario

Este ejercicio consiste en pasarle a una función llamada `isValidUsername` un nombre de usuario y comprobar si es válido o no según las siguientes reglas:

1. El nombre de usuario tiene que tener al menos 4 caracteres y no más de 30.
2. El nombre de usuario no puede empezar ni terminar con un guión bajo.
3. El nombre de usuario tiene que contener al menos una letra mayúscula, una letra minúscula, un número y algún símbolo especial ($,-,_).
4. No se permite la repetición de un mismo tipo de caracter más de dos veces seguidas.

Para ello, creamos la función y le pasamos una cadena (`cadena10`) con el nombre de usuario. A continuación, comprobamos que la longitud sea superior o igual a 4 y menor o igual a 30 (usando `if((cadena10.length < 4) || (cadena10.length > 30))`), también comprobamos que no empiece ni termine con `_` (` cadena10[0] == '_') && (cadena10[cadena10.length -1] == '_'` ), ambas comprobaciones deberán devolver **false** para que se cumplan las reglas.Además, deberán contener una letra mayúscula, minúscula, número y símbolo especial (`if((cadena10.match(numero) != null) && (cadena10.match(simbolo) != null) && (cadena10.match(m_letra) != null) && (cadena10.match(M_letra) != null) `) usamos `match()` para buscar todas las posibles combinaciones de cada expresión regualar a la que se lo estamos aplicando. Dichas expresiones han sido declaradas previamente como constantes. Del mismo modo lo aplicamos para buscar que no se repitan los caracteres. 

El código quedaría de la siguiente manera:
```typescript
function isValidUsername(cadena10: string) {
    if((cadena10.length < 4) || (cadena10.length > 30)) {
        return false;
    }
        
        if((cadena10[0] == '_') || cadena10[cadena10.length -1] == '_' ) {
            return false;
        }

    const numero = /[0-9]/g;
    const simbolo = /[$_-]/g;
    const m_letra = /[a-z]/g;
    const M_letra = /[A-Z]/g;
    const Tnum = /[0-9][0-9][0-9]/g;
    const Tsimbolo = /[$_-][$_-][$_-]/g;
    const Tm_letra = /[a-z][a-z][a-z]/g;
    const TM_letra = /[A-Z][A-Z][A-Z]/g;

    if((cadena10.match(numero) != null) && (cadena10.match(simbolo) != null) && (cadena10.match(m_letra) != null) && (cadena10.match(M_letra) != null) ) {
        return true;
    }
        if((cadena10.match(Tnum) != null) && (cadena10.match(Tsimbolo) == null) && (cadena10.match(Tm_letra) == null) && (cadena10.match(TM_letra) == null)) {
            return true;
        }

}

const cadena10A: string = "Al$3";
const VNU = isValidUsername(cadena10A);
console.log(`¿Usuario válido? = ${VNU}`);
```

Y la salida:
```
[~/practica3()]$node dist/ejercicio-10.js
¿Usuario válido? = true
```


## Conclusión
La realización de la práctica me supuso bastantes dificultades, en parte, debido a no haber utilizado nunca antes ni JavaScript ni TypeScript, esto hace darme cuenta de la necesidad de afianzar conceptos y profundizar un poco más en estos lenguajes para futuras prácticas.

## Bibliografía
| Nombre                 | Link                                                                                          |
|------------------------|:---------------------------------------------------------------------------------------------:|
| Guía de configuración  | https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html       |
| W3School               | https://www.w3schools.com/js/                                                                 |
| MDN Web Docs           | https://developer.mozilla.org/es/docs/Web/JavaScript/                                         |
| Apuntes                | https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-functions.html           |
