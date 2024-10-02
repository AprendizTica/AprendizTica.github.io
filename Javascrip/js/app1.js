function saludar(nombre){
    return "Hola, " + nombre;
}
let saludo = saludar("Ana");
console.log(saludo); // " Hola, Ana"

let saludo1 = saludar("Claudia");
let saludo2 = saludar("Patricia");
console.log(saludo1); // " Hola, Claudia"
console.log(saludo2); // " Hola, Patricia"
let saludo3 = saludar("laura");
console.log(saludo3); // " Hola, Laura"
console.log(saludo3); // " Hola, Laura"
console.log(saludo3); // " Hola, Laura"
console.log(saludo); // " Hola, Ana"

function sumar(x,y){
    return x + y;
}
console.log(sumar(2,7)); //9


function restar(x,y){
    return y - x;
}
console.log(restar(7,2)); //-5


let global = " Soy global";
function prueba() {
    let local = "Soy local";
    console.log (global); // "Soy global"
    console.log (local); // "Soy local"
}
prueba()
console.log(global) //soy  global

//ejemplo
function sumar_numeros(a,b) {
    let suma1 = a+b;
    return suma1; // "Soy local"
}
console.log(sumar_numeros(2,7))


for (let i=0; i<5; i++){
    console.log("Numero: " + i) // 0,1,2,3,4
}
for (let l=0; l<5; l+=2){
    console.log("Numero: " + l) //0,2,,4
}


let suma = 0;
for(let p=0; p<=100; p++){
    suma+=p;
}
let promedio = suma/100;
console.log(suma); //5050
console.log(promedio) //50.5


let z=0;
while (z <= 10) {
console.log("numero:"+ z);
z++; //numero:1, numero:2, numero 3....numero:10
}

let factorial =1;
q=1;
while (q<=12){
    factorial *=q;
    q++; 
}
console.log (factorial);//479001600


r=0
do {
console.log ("numero:"+r);
r++;
}
while (r<5);


let estudiantes = [
    {nombre: "carlos", edad:40},
    {nombre: "pedro", edad:25},
    {nombre: "juan", edad:33},
    {nombre: "julio", edad:48},
    {nombre: "jose", edad:21},
]

for (let estudiante of estudiantes) {
    console.log(estudiante);
}
let suma_lista=0;
for (let estudiante of estudiantes) {
    suma_lista +=estudiante.edad;
}

console.log(estudiantes.length);
console.log(suma_lista/estudiantes.length); //
 