//Estructuras condicionales
//Sirven para establecerle condiciones al programa y que él las evalúe y dependiendo
// de si se cumple la condición le definimos que debe hacer. 
let edad = 18; // establecer el valor de edad a una variable 
if (edad < 18) {
    console.log("Eres menor de edad.");
} else if (edad > 18 && edad < 65) {
    console.log("Eres aduto.");
} else {
    console.log("Eres mayor.");
}

//-----------------------------------------------


function calcularEdad_(e) { // la e es un parametro o argumento
    if (e < 18) {
        console.log("Eres menor de edad.");
    }
    else if (e >= 18 && e < 65) {
        console.log("Eres adulto.");
    }
    else {
        console.log("Eres mayor.");
    }
}
calcularEdad_(15); // El 15 es el parametro o argumento

//-----------------------------------------------

let edad1 = prompt("cual es tu edad"); //ventanillla para colocar la edad//

function calcularEdad(edad1) {
    if (edad1 < 18) {
        alert("Eres menor de edad.");
    }
    else if (edad1 >= 18 && edad1 < 65) {
        alert("Eres adulto.");
    }
    else {
        alert("Eres mayor.");
    }
}
calcularEdad(edad1);

//-----------------------------------------------

function calcularEdad3(edad3) {
    console.log(edad3)
    if (edad3 < 18) {
        alert("Eres menor de edad.");
    }
    else if (edad3 >= 18 && edad3 < 65) {
        alert("Eres adulto.");
    }
    else {
        alert("Eres mayor.");
    }
}
calcularEdad3(45);

//-----------------------------------------------


let edad4 = 18;

let mensaje = (edad4 >= 18) ? "mayor." : "menor"; // version corto de un If y un else
console.log(mensaje);                               //mayor                       
//----------------------
if (edad4 >= 18) {
    console.log("mayor");

} else {
    console.log("menor");                           //mayor
}

//-----------------------------------------------

let dia = 3;
switch (dia) {  // El numero del dia es el parametro, al ingresar parametro el switch evalúa que caso se cumple 
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    default:
        console.log("Dia no válido"); //Miecolea
}

//-----------------------------------------------


for (let carro of carros) { //Bucle for of que recorre una lista de varios carros y los imprime
    console.log(carro.marca);
}

//-----------------------------------------------


function escmult(valor) {
    //contenido de la funcion
    for (let i = 1; i <= 12; i++) {
        valor *= i //valor = valor(el que ya llevo) * i
        console.log(valor);
    };
    return valor;
}

let resultado = escmult(5)
console.log("resultado multiplicación:", resultado)

function escdiv(resultado) {
    //contenido de la funcion
    for (let i = 1; i <= 12; i++) {
        resultado /= i
        console.log(resultado);
    };

    return resultado;
}


let valor = escdiv(resultado)
console.log("resultado división:", valor);
//evaluar si todo esta correcto imprimir en el resultado
//-----------------------------------------------
