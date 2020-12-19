let listadoDePersonal = [];
async function loadList() {
    let container = document.querySelector("#use-ajax");
    try {
        let response = await fetch('./consultas');
        if (response.ok) {
            let t = await response.json();
            listadoDePersonal = t;
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
        html += `
        <tr>
        <td>
        <select id="modifGrado${i}"  class="motDesplegable">
                     <option type="text" value="1">TC</option>
                     <option type="text" value="2">MY</option>
                     <option type="text" value="3">CT</option>
                     <option type="text" value="4">TI</option>
                     <option type="text" value="5">TT</option>
                     <option type="text" value="6">ST</option>
                     <option type="text" value="7">SM</option>
                     <option type="text" value="8">SP</option>
                     <option type="text" value="9">SA</option>
                     <option type="text" value="10">SI</option>
                     <option type="text" value="11">SG</option>
                     <option type="text" value="12">CI</option>
                     <option type="text" value="13">CB</option>
                     <option type="text" value="14">CB Art 11</option>
                     <option type="text" value="15">VP</option>
                     <option type="text" value="16">VS</option>
                     <option type="text" value="17">VS "EC"</option>       
         </select>
        </td>
        <td type=”text” class="motDesplegable" id="grado${i}">${listadoDePersonal[i].grado.nombre}</td>
           <td><input type=”text” class="motDesplegable" id="nombre${i}" value=${listadoDePersonal[i].nombre}></td>
           <td><input type=”text” class="motDesplegable" id="apellido${i}" posit=${i} value=${listadoDePersonal[i].apellido}></td>
           <td><button id="actualizarPersonal" class="btn btn-primary btn-enviar" posit=${i} pos=${listadoDePersonal[i].idPers}>Actualizar</button></td>
           <td><button id="borrarPersonal"  class="btn btn-primary btn-enviar"  
           pos=${listadoDePersonal[i].idPers}>Borrar</button></td>
           </tr >
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
    let response = await fetch(`./personal/ ` + idPers, {
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json"
        }
    }
    )
    recargar();
}

function recargarPagina() {
    loadList();
}

function recargar() {
    let contador = 15;
    while (contador != 0) {
        contador--;
    }
    recargarPagina();
}
async function btnActualizarClick() {
    let idPers = this.getAttribute("pos");
    let posit = this.getAttribute("posit");
    let grado = document.getElementById(`modifGrado${posit}`);
    let idGrado = grado.options[grado.selectedIndex].value;
    let nombre = document.querySelector(`#nombre${posit} `).value;
    let apellido = document.querySelector(`#apellido${posit} `).value;
    let pers = {
        "idGrado": idGrado,
        "nombre": nombre,
        "apellido": apellido,
        "idPers": idPers
    }
    let response = await fetch('./personal/' + idPers, {
        "method": "PUT",
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(pers)
    })
    loadList();
}
loadList();