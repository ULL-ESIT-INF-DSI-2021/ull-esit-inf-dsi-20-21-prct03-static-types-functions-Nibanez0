function isValidUsername(cadena10) {
    if ((cadena10.length < 4) || (cadena10.length > 30)) {
        return false;
    }
    if ((cadena10[0] == '_') || cadena10[cadena10.length - 1] == '_') {
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
    if ((cadena10.match(numero) != null) && (cadena10.match(simbolo) != null) && (cadena10.match(m_letra) != null) && (cadena10.match(M_letra) != null)) {
        return true;
    }
    if ((cadena10.match(Tnum) != null) && (cadena10.match(Tsimbolo) == null) && (cadena10.match(Tm_letra) == null) && (cadena10.match(TM_letra) == null)) {
        return true;
    }
}
const cadena10A = "Al$3";
const VNU = isValidUsername(cadena10A);
console.log(`¿Usuario válido? = ${VNU}`);
