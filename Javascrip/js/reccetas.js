let button = document.querySelector("button")



let divr= document.getElementById("respuestas")



button.addEventListener("click", function(event){

    let numReceta= document.getElementById("tipo")
    let texto= numReceta.value

    let comentario= document.getElementById("otro")
    let com = comentario.value


    const nuevoElemento = document.createElement('ul');
    nuevoElemento.textContent = texto;
    const nuevoElemento2 = document.createElement('ul');
    nuevoElemento2.textContent = com;

    divr.appendChild(nuevoElemento)
    divr.appendChild(nuevoElemento2)



})