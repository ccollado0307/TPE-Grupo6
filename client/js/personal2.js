let listadoDePersonal = [];
async function loadList() {
    let container = document.querySelector("#use-ajax");
    try {
        let response = await fetch('./consultas');
        if (response.ok) {
            let t = await response.json();
            listadoDePersonal = t; //reemplaza arreglo global listadoDePersonal por el que viene de la api 
        }
        else {
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
        }
    }
    catch (response) {
        container.innerHTML = "<h1>Connection error</h1>";
    }
    mostrarTablaPersonal();
}
function mostrarTablaPersonal() {
    let html = "";
    for (let i = 0; i < listadoDePersonal.length; i++) {
        //<td type=”number” id="numero${i}">${listadoDePersonal[i].antiguedad}</td>
        html += `
       <tr>
           <td><input type=”text” class="motDesplegable" id="grado${i}" value=${listadoDePersonal[i].grado.nombre}></td>
           <td><input type=”text” class="motDesplegable" id="nombre${i}" value=${listadoDePersonal[i].nombre}></td>
           <td><input type=”text” class="motDesplegable" id="apellido${i}" value=${listadoDePersonal[i].apellido}></td>
           <td><button id="actualizarPersonal" class="btn btn-primary btn-enviar" pos=${listadoDePersonal[i].idPers}>Actualizar</button></td>
           <td><button id="borrarPersonal"  class="btn btn-primary btn-enviar" pos=${listadoDePersonal[i].idPers}>Borrar</button></td>
           </tr>
           `;
    }
    document.querySelector("#tblPersonal").innerHTML = html;
    addButtonBehavior("#borrarPersonal", btnBorrarClick);
    addButtonBehavior("#actualizarPersonal", btnActualizarClick);
}
function addButtonBehavior(btnId, fn) {
    let botones = document.querySelectorAll(btnId);
    botones.forEach(boton => {
        boton.addEventListener("click", fn);
    });
}
async function btnBorrarClick() {
    let idPers = this.getAttribute("pos");
    let response = await fetch(`./personal/` + idPers, {
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json"
        }
    }
    )
    recargar();
}
function recargarPagina(){
    loadList();
}
function recargar(){
   console.log("entre a recargar")
    let contador = 15;
    while(contador!=0){
        console.log("entre al while");
        contador--;
        console.log(contador);
    }
    recargarPagina();
}
async function btnActualizarClick() {
    let pos = this.getAttribute("pos");
    let pers = {
        "grado": document.querySelector(`grado${pos}`).value,
        "nombre": document.querySelector(`#nombre${pos}`).value,
        "apellido": document.querySelector(`#apellido${pos}`).value,
    }
    let response = await fetch('./personal/' + pos, {
        "method": "PUT",
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(pers)
    })
    loadList();
}
loadList();





