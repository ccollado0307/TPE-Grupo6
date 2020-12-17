
let listadoDeGrados = [];

let btnAgregar = document.querySelector("#agregarPersonal");
btnAgregar.addEventListener("click", agregarPersonal);

//let botonVolver = document.getElementById("volverAReporte");
//botonVolver.addEventListener("click", volver);

async function loadGradosList() {
    try {
        let grados = await fetch('./grado/getAll');
        if (grados.ok) {
            let g = await grados.json();
            listadoDeGrados = g;
        }
        else {
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
        }
    }
    catch (grados) {
        container.innerHTML = "<h1>Connection error</h1>";
    }
    cargarListaDeGrados();
  
}


function cargarListaDeGrados() {
    let html = "";
    for (let i = 0; i < listadoDeGrados.length; i++) {
        html += `
                <option type=”text” value="idGrado${i+1}">
                ${listadoDeGrados[i].nombre}  
                `;
    }
    document.querySelector("#addGrado").innerHTML = html;
}

function volver() {
    alert("hola");
    window.location.href = 'http://www.google.com/';
}


async function agregarPersonal() {
    
    let grado = document.querySelector('#addGrado').value; //option.id;
    let apellido = document.querySelector('#addApellido').value;
    let nombre = document.querySelector('#addNombre').value;

    
    let addPers = {
        "grado": grado,
        "apellido": apellido,
        "nombre": nombre,
        "idUnidad": 1,
        "activo": true,
    }
    let resp = await fetch('./personal', {
        "method": "POST",
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(addPers)
    })
    if(resp.ok){
        document.getElementById("mensajeRespuesta").innerHTML = "El Personal se agrego correctamente"
    }
    else{
        document.getElementById("mensajeRespuesta").innerHTML = "No se ha podido realizar la operacion"
    }
}

loadGradosList();