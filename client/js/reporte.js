let btnAgregar = document.querySelector("#agregarAsistencia");
btnAgregar.addEventListener("click", agregarAsistencia);

let listadoDePersonal = [];
let listadoDeMotivos = [];
let listadoDeGrados = [];

async function loadList() {
    let container = document.querySelector("#use-ajax");
    try {
        let response = await fetch('./consultas');
        if (response.ok) {
            listadoDePersonal = await response.json();
            //reemplaza arreglo global listadoDePersonal por el que viene de la api 
        }
        else {
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
        }
    }
    catch (response) {
        container.innerHTML = "<h1>Connection error</h1>";
    }
    try {
        let motivos = await fetch('./motivo');
        if (motivos.ok) {
            listadoDeMotivos = await motivos.json();
            //reemplaza arreglo global motivos por el que viene de la api 
            //mostrarTablaPersonal();
        }
        else {
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
        }
    }
    catch (motivos) {
        container.innerHTML = "<h1>Connection error</h1>";
    }
    try {
        let grados = await fetch('./grado/getAll');
        if (grados.ok) {
            listadoDeGrados = await grados.json();
            //cargarListaDeGrados();
        }
        else {
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
        }
    }
    catch (grados) {
        container.innerHTML = "<h1>Connection error</h1>";
    }
    mostrarTablaPersonal();
    cargarListaDeGrados();
}

function cargarListaDeGrados() {
    let html = "";
    for (let i = 0; i < listadoDeGrados.length; i++) {
        html += `
                <option type=”text” value="idGrado${i + 1}">
                ${listadoDeGrados[i].nombre}  
                `;
    }
    document.querySelector("#addGrado").innerHTML = html;
}

function mostrarTablaPersonal() {

    let html = "";
    for (let i = 0; i < listadoDePersonal.length; i++) {
        //<td type=”number” id="numero${i}">${listadoDePersonal[i].antiguedad}</td>
        html += `
        <tr>
            <td type=”text” id="grado${i}">${listadoDePersonal[i].grado.nombre}</td>
            <td type=”text” id="nombre${i}">${listadoDePersonal[i].nombre}</td>
            <td type=”text” id="apellido${i}">${listadoDePersonal[i].apellido}</td>
            <td><input type="checkbox" name="asistencia" id="presente${i}"></td>
            <td><input type="checkbox" name="asistencia" id="ausente${i}"></td>
            <td>
                <select id="causa${i}" class="motDesplegable">
                        <option value="autorizado">${listadoDeMotivos[0].motivo}</option>
                        <option value="gusal">${listadoDeMotivos[1].motivo}</option>
                        <option value="gue">${listadoDeMotivos[2].motivo}</option>
                        <option value="fei">${listadoDeMotivos[3].motivo}</option>
                        <option value="fei">${listadoDeMotivos[4].motivo}</option>
                </select>
            </td>
        </tr>
           `;
    }
    document.querySelector("#tblPersonal").innerHTML = html;
    let btnAgregar = document.querySelector("#agregarPersonal");
    btnAgregar.addEventListener("click", agregarPersonal);
}

async function agregarAsistencia() {
    let arregloDeAsistencia = [];
    let fecha = document.querySelector("#start").value;
    for (let i = 0; i < listadoDePersonal.length; i++) {
        let asistencia;
        let motivo;
        let idMotivo;
        if (document.querySelector(`#presente${i}`).checked) {
            asistencia = "Presente";
            motivo = listadoDeMotivos[0].motivo;
            idMotivo = 1;
        } else {
            asistencia = "Ausente";
            motivo = (document.querySelector(`#causa${i}`).selectedIndex);
            switch (motivo) {
                case 1: motivo = listadoDeMotivos[1].motivo;
                    idMotivo = 2;
                    break;
                case 2: motivo = listadoDeMotivos[2].motivo;
                    idMotivo = 3;
                    break;
                case 3: motivo = listadoDeMotivos[3].motivo;
                    idMotivo = 4;
                    break;
                case 4: motivo = listadoDeMotivos[4].motivo;
                    idMotivo = 5;
                    break;
            }
        }
        let antiguedad = listadoDePersonal[i].antiguedad;
        let apellido = listadoDePersonal[i].apellido;
        let grado = listadoDePersonal[i].grado.nombre;
        let idGrado = listadoDePersonal[i].grado.idGrado;
        let idPers = listadoDePersonal[i].idPers;
        let nombre = listadoDePersonal[i].nombre;
        let activo = listadoDePersonal[i].activo;
        let idUnidad = listadoDePersonal[i].idUnidad;
        let asist = {
            "idGrado": idGrado,
            "antiguedad": antiguedad,
            "dia": fecha,
            "grado": grado,
            "nombre": nombre,
            "apellido": apellido,
            "motivo": motivo,
            "activo": activo,
            "idUnidad": idUnidad,
            "idPers": idPers,
            "idMotivo": idMotivo
        }
        arregloDeAsistencia.push(asist);
      
    }
    let resp = await fetch('./asistencia/addAsistencia', {
        "method": "POST",
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(arregloDeAsistencia)
    })
    if (resp.ok) {
        let container = document.querySelector("#use-ajax");
        container.innerHTML = "La asistencia se ha registrado correctamente";
    } else {
        container.innerHTML = "Fallo el Post";
    }
}

async function agregarPersonal() {
    // let antiguedad = document.querySelector('#addNumero').value;
    let grado = document.querySelector('#addGrado').value; //option.id;
    let apellido = document.querySelector('#addApellido').value;
    let nombre = document.querySelector('#addNombre').value;

    //   "antiguedad": antiguedad,
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
    if (resp.ok) {
        loadList();
    } else {
        container.innerHTML = "Fallo el Post";
    }
}

function volver() {
    window.location.href = './reporte.html';
}

loadList();