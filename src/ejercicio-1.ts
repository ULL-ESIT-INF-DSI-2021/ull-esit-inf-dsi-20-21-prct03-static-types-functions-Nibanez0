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
