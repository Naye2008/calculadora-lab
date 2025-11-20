let numero1= parseFloat(prompt("Ingrese el el primer  numero:"));
let numero2= parseFloat(prompt("Ingrese el el segundo  numero:"));

function sumar(numero1, numero2){
    return numero1 + numero2;
}

function resta(numero1, numero2){
    return numero1 - numero2;
}

function multiplicacion(numero1, numero2){
    return numero1 * numero2;
}

function division(numero1, numero2){
    return numero1 / numero2;
}
let resultado = sumar(numero1, numero2);
console.log("resultado de suma" + " " + resultado);

resultado = resta(numero1, numero2);
console.log("resultado de resta" + " " + resultado);

resultado = multiplicacion(numero1, numero2);
console.log("resultado de multiplicacion" + " " + resultado);

resultado = division(numero1, numero2);
console.log("resultado de division" + " " + resultado);
