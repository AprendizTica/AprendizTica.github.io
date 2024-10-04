const lista = document.getElementById ("lista");
const tarea = document.getElementById ("tarea");
const boton = document.getElementById ("boton");

boton.addEventListener("dblclick", function(event){
    console.log(event);
    agregartarea();
});

function agregartarea(){
    const nuevatarea = document.
    createElement("li");
    nuevatarea.innerText = tarea.value;
    lista.appendChild(nuevatarea);
}
function eliminartareas(){

}