let formularioLogin = document.getElementById('formularioLoguin');
formularioLogin.addEventListener('submit', checkear);

//Chequea que el usuario y contraseña ingresado este registrado en la base de datos
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
    }
}