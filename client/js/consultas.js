// Carga lista de personal
let listadoDePersonal = [];

async function loadList() {
    try {
        let response = await fetch('./consultas');
        if (response.ok) {
            let t = await response.json();
            listadoDePersonal = t; 
            cargarPersonal(); //Muestro todo el personal almacenado en la BD
        }
        else {
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
        }
    }
    catch (response) {
        container.innerHTML = "<h1>Connection error</h1>";
    };
}

function cargarPersonal() {
    let html = ""; 
    for (let i = 0; i < listadoDePersonal.length; i++) {
        html += `
            <option type=”text” id="numeroC${i}" value="${listadoDePersonal[i].idPers}">
            ${listadoDePersonal[i].grado.nombre}  
            ${listadoDePersonal[i].nombre}   
            ${listadoDePersonal[i].apellido}  
           `;
    }
    document.querySelector("#option_listPers").innerHTML = html;
}

loadList();

// Verifico cual es la consulta que esta seleccionada
let btn_consulta = document.querySelector("#btn_consulta");
btn_consulta.addEventListener("click", tipoConsulta);

let formConsultas = document.querySelector(".formArticleConsultas");

let listadoDeConsulta = [];

function tipoConsulta() {
    let manyCheckBox = document.querySelectorAll(".form-check-input");
    let nroConsulta = 0;
    for (let i = 0; i < manyCheckBox.length; i++) {
        if (manyCheckBox[i].checked) {
            nroConsulta += i + 1;
        }
    }

    //No se indico ninguna consulta
    if (nroConsulta == 0){ 
        document.getElementById('btn_consulta').setAttribute('data-toggle', 'modal');
        document.getElementById('btn_consulta').setAttribute('data-target', '#myModal');
    } else {
        document.getElementById('btn_consulta').setAttribute('data-toggle', 'hide');
    }

    switch (nroConsulta) {
        case 1: loadAllInformation(1); //Una persona
            break;
        case 2: loadAllInformation(2); //Fecha
            break;
        case 3: loadAllInformation(3); //Gu Ent
            break;
        case 4: loadAllInformation(4); //Gu Sal
            break;
        case 5: loadAllInformation(5); //Autorizados
            break;
    }
}

async function loadAllInformation(nroConsulta) {
    let idPers = document.querySelector("#option_listPers").value;
    let fecha = document.querySelector("#input_calendario").value;

    let parametros = {
        "nroConsulta": nroConsulta,
        "fecha": fecha,
        "idPers": parseInt(idPers)
    }

    let response = await fetch('./consultas',
        {
            "method": "POST",
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify(parametros)
        })
    if (response.ok) {
        let t = await response.json();
        listadoDeConsulta = t;

        console.log(listadoDeConsulta);


        if (listadoDeConsulta.length != 0) {
            formConsultas.classList.toggle("hide");
            cargarConsulta()
        } else {
            alert('NO HAY CONSULTAS PARA MOSTRAR');
        }
    } else {
        console.log("fallo el post");
    }
}

function cargarConsulta() {
    let html = `<table class="tableConsulta">
    <thead>
        <tr>
            <th class="th">Fecha</th>
            <th class="th">Grado</th>
            <th class="th">Apellido</th>
            <th class="th">Nombre</th>
            <th class="th">Motivo</th>
        </tr>
    </thead>
        <tbody id="tblConsulta"></tbody>`
        ;

    if (listadoDeConsulta.length != 0) {
        for (let i = 0; i < listadoDeConsulta.length; i++) {
            html += `
                    <tr>
                        <td type=”fecha” id="fecha${i}">${listadoDeConsulta[i].fecha.substring( 0 , 10 )}</td>
                        <td type=”text” id="grado${i}">${listadoDeConsulta[i].grado.nombre}</td>
                        <td type=”text” id="apellido${i}">${listadoDeConsulta[i].personal.apellido}</td>
                        <td type=”text” id="nombre${i}">${listadoDeConsulta[i].personal.nombre}</td>
                        <td type=”text” id="motivo${i}">${listadoDeConsulta[i].motivo.motivo}</td>
                    </tr>
                    `;
        }
        html += `
            </table>
            <button type="submit" class="btn btn-primary btn-mostrar-consultas" id="volver">Volver</button>`;

        formConsultas.classList.toggle("hide");
        formConsultas.innerHTML = html;
        let botonVolver = document.getElementById("volver");
        botonVolver.addEventListener("click", volver);
    }
} 

function volver() {
    window.location.href = './consultas.html';
}