let btnLogin = document.getElementById('btn_login');
btnLogin.addEventListener('click', checkear);

//Chequea que el usuario y contraseña ingresado este registrado en la base de datos
async function checkear() {

    document.getElementById('btn_login').setAttribute('data-toggle', 'modal');
    document.getElementById('btn_login').setAttribute('data-target', '#myModal');

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
}