// Load Consultas indico el personal 
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
            <option type=”text” id="numeroC${i}"> 
            ${listadoDePersonal[i].grado}  
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

let listadoDeConsulta = [];

function tipoConsulta() {
    let manyCheckBox = document.querySelectorAll(".form-check-input");

    let nroConsulta = 0;

    for (let i = 0; i < manyCheckBox.length; i++) {
        if (manyCheckBox[i].checked) {
            nroConsulta += i + 1;
        }
    }

    switch (nroConsulta) {
        case 1: loadAllInformation(1);
            break;
        case 2: loadAllInformation(2);
            break;
        case 3: loadAllInformation(3);
            break;
        case 4: loadAllInformation(4);
            break;
        default:
            loadAllInformation(5);
    }
}

async function loadAllInformation(nroConsulta) {
    let persAsist = document.querySelector("#option_listPers").value;
    let fecha = document.querySelector("#input_calendario").value;

    let parametros = {
        "nroConsulta": nroConsulta,
        "fecha": fecha,
        "persAsist": persAsist
    }

    let response = await fetch('./consultas',
        {
            "method": "POST",
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify(parametros)
        })

    if (response.ok) {
        let t = await response.json();
        listadoDeConsulta = t; //windows href ... a otro html
        cargarConsulta()
    } else {
        //buscar una respuesta en el html
        console.log("fallo el post");
    }
}

function cargarConsulta() {
    let html = "";

    if (listadoDeConsulta.length != 0) {
        for (let i = 0; i < listadoDeConsulta.length; i++) {
            html += `
                    <tr>
                        <td type=”fecha” id="fecha${i}">${listadoDeConsulta[i].fecha}</td>
                        <td type=”number” id="numero${i}">${listadoDeConsulta[i].numero}</td>
                        <td type=”text” id="grado${i}">${listadoDeConsulta[i].grado}</td>
                        <td type=”text” id="apellido${i}">${listadoDeConsulta[i].apellido}</td>
                        <td type=”text” id="nombre${i}">${listadoDeConsulta[i].nombre}</td>
                        <td type=”text” id="asistencia${i}">${listadoDeConsulta[i].asistencia}</td>
                        <td type=”text” id="motivo${i}">${listadoDeConsulta[i].motivo}</td>
                    </tr>
                    `;
        }
        document.querySelector("#tblConsulta").innerHTML = html;
    }
    else
        alert('NO HAY CONSULTAS PARA MOSTRAR');

}