
let edad = 18;
if (edad < 18) {
    console.log("Eres menor de edad.");
} else if (edad > 18 && edad < 65) {
    console.log("Eres aduto.");
} else {
    console.log("Eres mayor.");
}



//-----------------------------------------------




let edad2 = 15;

function calcularEdad_() {
    if (edad2 < 18) {
        console.log("Eres menor de edad.");
    }
    else if (edad2 >= 18 && edad2 < 65) {
        console.log("Eres adulto.");
    }
    else {
        console.log("Eres mayor.");
    }
}
calcularEdad_();

//-----------------------------------------------

let edad1 = prompt("cual es tu edad");

function calcularEdad() {
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
calcularEdad();

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

let mensaje = (edad4 >= 18) ? "mayor." : "menor";
console.log(mensaje);                               //mayor                       
//----------------------
if (edad4 >= 18) {
    console.log("mayor");

} else {
    console.log("menor");                           //mayor
}

//-----------------------------------------------

let dia = 3;
switch (dia) {
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


for (let carro of carros) {
    console.log(carro.marca);
}

//-----------------------------------------------


function escmult(valor) {
    //contenido de la funcion
    for (let i = 1; i <= 12; i++) {
        valor *= i
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
