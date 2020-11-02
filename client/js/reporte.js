

let btnAgregar = document.querySelector("#agregarAsistencia");
btnAgregar.addEventListener("click", agregarAsistencia);

let listadoDePersonal = [];

async function loadList() {
    let container = document.querySelector("#use-ajax");
    //  container.innerHTML = "<h1> ...LOADING... </h1>";
    try {
        let response = await fetch('./reporte'); 
        if (response.ok) {
            let t = await response.json();
            listadoDePersonal = t; //reemplazo arreglo global listadoDePersonal por el que viene de la api 
            mostrarTablaPersonal(); //muestro todo el personal almacenado en la base de datos
        }
        else {
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
        }
    }
    catch (response) {
        container.innerHTML = "<h1>Connection error</h1>";
    };
}


function mostrarTablaPersonal() {
    html = "";
    for (let i = 0; i < listadoDePersonal.length; i++) {
        html += `
        <tr>
            <td type=”number” id="numero${i}">${listadoDePersonal[i].numero}</td>
            <td type=”text” id="grado${i}">${listadoDePersonal[i].grado}</td>
            <td type=”text” id="nombre${i}">${listadoDePersonal[i].nombre}</td>
            <td type=”text” id="apellido${i}">${listadoDePersonal[i].apellido}</td>
            <td><input type="checkbox" name="asistencia" id="presente${i}"></td>
            <td><input type="checkbox" name="asistencia" id="ausente${i}"></td>
            <td>
                <select id="causa${i}">
                        <option value="autorizado">Autorizado</option>
                        <option value="gusal">Guardia Saliente</option>
                        <option value="gue">Guardia Entrante</option>
                        <option value="fei">Fuerza Empleo Inmediato</option>
                </select>
            </td>
        </tr>
           `;
    }

    document.querySelector("#tblPersonal").innerHTML = html;
}


async function agregarAsistencia() {

    let arregloDeAsistencia = [];
    let fecha = document.querySelector("#start").value;

    for (let i = 0; i < listadoDePersonal.length; i++) {

        let asistencia;
        let causa;
        if(document.querySelector(`#presente${i}`).checked){
            asistencia="presente";
            causa="asistio";
        }else{
            asistencia="ausente";
            causa=(document.querySelector(`#causa${i}`).selectedIndex);
            switch(causa){
                case 0: causa="Autorizado";
                break;
                case 1: causa="Guardia Saliente";
                break;
                case 2: causa="Guardia Entrante";
                break;
                case 3: causa="Fuerza Empleo Inmediato";
                break;
            }
        }

        let num = listadoDePersonal[i].numero;
        let grado = listadoDePersonal[i].grado;
        let nombre = listadoDePersonal[i].nombre;
        let apellido = listadoDePersonal[i].apellido;

        let asist = {
            "dia": fecha,
            "numero": num,
            "grado": grado,
            "nombre": nombre,
            "apellido": apellido,
            "asistencia": asistencia,
            "causa":causa
        }
        arregloDeAsistencia.push(asist);
    }

    let resp = await fetch('./reporte', {
        "method": "POST",
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(arregloDeAsistencia)
    })
    if (resp.ok) {
        let container = document.querySelector("#use-ajax");
        container.innerHTML = "La asistencia se ha registrado correctamente";
    } else {
        //buscar una respuesta en el html
        console.log("fallo el post");

    }
}


loadList();

