let btnLogin = document.getElementById('btn_login');
btnLogin.addEventListener('click', checkear);

let formularioLogin = document.querySelector(".formularioLogin");

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
        window.location.href = "/consultas.html";
    }
    else {
        let alert =
                `<div class="alert alert-primary" id="alerta" role="alert"> Usuario o Contraseña inválido </div>
                <button type="button" class="btn btn-primary btn-consultas" id="btn_modal">Volver</button>`
            formularioLogin.innerHTML = alert;
            let botonVolver = document.getElementById("btn_modal");
            botonVolver.addEventListener("click", volver);
    }
}

function volver() {
    window.location.href = './login.html';
}