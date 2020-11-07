let formularioLogin = document.getElementById('formularioLoguin');
formularioLogin.addEventListener('submit', checkear);

async function checkear() {

    let usuario = document.getElementById('exampleDropdownFormEmail2').value;
    let contraseña = document.getElementById('exampleDropdownFormPassword2').value;

    let data = {
        "user": usuario,
        "key": contraseña
    }
    let response = await fetch('./login', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (await response.json()) {
        window.location.href = "/reporte.html";
    }
    else {
        alert("Usuario o contraseña invalido");
      /*   let container = document.querySelector("#error");
        container.innerHTML = "La asistencia se ha registrado correctamente"; */
    }
}



