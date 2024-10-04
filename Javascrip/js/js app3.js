
function calcularEdad(edad){
    
    if(edad <18) {
        console.log ("menor de edad"); 
    }
    else if(edad >=18 && edad<65){
        console.log ("es adulto");
    }
    else {
        console.log ("mayor")
    }
}

calcularEdad();
for(let i=1; i<=70; i++){
    console.log (i);
    calcularEdad(i);
    
}