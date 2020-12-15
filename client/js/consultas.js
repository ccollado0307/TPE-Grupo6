// Carga lista de personal
let listadoDePersonal = [];

async function loadList() {
    try {
        let response = await fetch('./consultas');
        if (response.ok) {
            listadoDePersonal = await response.json();
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
    let fecha = document.querySelector("#input_calendario").value;
    let nroConsulta = 0;

    for (let i = 0; i < manyCheckBox.length; i++) {
        if (manyCheckBox[i].checked) {
            nroConsulta += i + 1;
        }
    }

    //No se indico ninguna consulta
    if ((nroConsulta == 0) || ((nroConsulta > 1) && (fecha.length == 0))) {
        btn_consulta.setAttribute('data-toggle', 'modal');
        btn_consulta.setAttribute('data-target', '#myModal');
    } else {
        btn_consulta.setAttribute('data-toggle', 'hide');
    }

    loadAllInformation(nroConsulta, fecha);
}

async function loadAllInformation(nroConsulta, fecha) {
    let idPers = document.querySelector("#option_listPers").value;
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
        listadoDeConsulta = await response.json();
        if (listadoDeConsulta.length != 0) {
            formConsultas.classList.toggle("hide"); //oculto el panel de opciones de consulta
            cargarConsulta(nroConsulta);
        } else {
            let alert =
                `<div class="alert alert-primary" role="alert"> No hay RESULTADOS para la CONSULTA especificada </div>
                <button type="button" class="btn btn-primary btn-consultas" id="btn_modal">Volver</button>`;
            //formConsultas.classList.toggle("hide");
            formConsultas.innerHTML = alert;
            let botonVolver = document.getElementById("btn_modal");
            botonVolver.addEventListener("click", volver);
        }
    } else {
        console.log("fallo el post");
    }
}

function cargarConsulta(nroConsulta) {
    if (nroConsulta == 1) {
        let html = `<table class="tableConsulta">
                    <thead class="encabezadoConsulta">
                        <tr class="elemConsulta">
                            <td> Grado Apellido y Nombre: 
                                ${listadoDeConsulta[0].grado.nombre}
                                ${listadoDeConsulta[0].personal.apellido} 
                                ${listadoDeConsulta[0].personal.nombre}
                            </td>
                        </tr>
                        <tr>
                            <td class="th">Fecha</td>
                            <td class="th">Motivo</td>
                        </tr>
                    </thead> 
                    <tbody id="tblConsulta"></tbody>
                    `;

        if (listadoDeConsulta.length != 0) {
            for (let i = 0; i < listadoDeConsulta.length; i++) {
                html += `
                        <tr>
                            <td type=”text” id="fecha${i}">${listadoDeConsulta[i].fecha.substring(0, 10)} </td> 
                            <td type=”text” id="motivo${i}">${listadoDeConsulta[i].motivo.motivo} </td>
                        </tr>
                `;
            }
            html += `
                </table>
                <button type="submit" class="btn btn-primary btn-mostrar-consultas" id="volver">Volver</button>`
                ;
        }
        formConsultas.classList.toggle("hide");
        formConsultas.innerHTML = html;
        let botonVolver = document.getElementById("volver");
        botonVolver.addEventListener("click", volver);
    }
    else if (nroConsulta == 2) {
        let html = `<table class="tableConsulta">
                        <thead class="encabezadoConsulta">
                        <tr class="elemConsulta">
                            <td> Fecha: 
                                ${listadoDeConsulta[0].fecha.substring(0, 10)}
                            </td>
                        </tr>
                        <tr>
                            <td class="th">Grado</td>
                            <td class="th">Apellido</td>
                            <td class="th">Nombre</td>
                            <td class="th">Motivo</td>
                        </tr>
                    </thead> 
                    <tbody id="tblConsulta"></tbody>
                    `;

        if (listadoDeConsulta.length != 0) {
            for (let i = 0; i < listadoDeConsulta.length; i++) {
                html += `
                        <tr>
                            <td type=”text” id="grado${i}">${listadoDeConsulta[i].grado.nombre} </td> 
                            <td type=”text” id="apellido${i}">${listadoDeConsulta[i].personal.apellido} </td>
                            <td type=”text” id="nombre${i}">${listadoDeConsulta[i].personal.nombre} </td>
                            <td type=”text” id="motivo${i}">${listadoDeConsulta[i].motivo.motivo} </td>
                        </tr>
                `;
            }
            html += `
                </table>
                <button type="submit" class="btn btn-primary btn-mostrar-consultas" id="volver">Volver</button>`
                ;
        }
        formConsultas.classList.toggle("hide");
        formConsultas.innerHTML = html;
        let botonVolver = document.getElementById("volver");
        botonVolver.addEventListener("click", volver);
    } else {
        let html = `<table class="tableConsulta">
                        <thead class="encabezadoConsulta">
                        <tr class="elemConsulta">
                                <td> Fecha: 
                                    ${listadoDeConsulta[0].fecha.substring(0, 10)}
                                </td>
                                <td> Motivo: 
                                    ${listadoDeConsulta[0].motivo.motivo}
                                </td>
                            </tr>
                            <tr>
                                <td class="th">Grado</td>
                                <td class="th">Apellido</td>
                                <td class="th">Nombre</td>
                            </tr>
                        </thead> 
                        <tbody id="tblConsulta"></tbody>
                        `;

        if (listadoDeConsulta.length != 0) {
            for (let i = 0; i < listadoDeConsulta.length; i++) {
                html += `
                            <tr>
                                <td type=”text” id="grado${i}">${listadoDeConsulta[i].grado.nombre} </td> 
                                <td type=”text” id="apellido${i}">${listadoDeConsulta[i].personal.apellido} </td>
                                <td type=”text” id="nombre${i}">${listadoDeConsulta[i].personal.nombre} </td>
                            </tr>
                    `;
            }
            html += `
                    </table>
                    <button type="submit" class="btn btn-primary btn-mostrar-consultas" id="volver">Volver</button>`
                ;
        }
        formConsultas.classList.toggle("hide");
        formConsultas.innerHTML = html;
        let botonVolver = document.getElementById("volver");
        botonVolver.addEventListener("click", volver);
    }
}

function volver() {
    window.location.href = './consultas.html';
}