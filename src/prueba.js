function llamada(id_usu){
    var h3 = document.querySelector("h3");
    var usuario;
    
    var formu = document.forms[0];
    var inputNombre = formu.campo2;
    var inputEmail = formu.campo3;
    var inputTelefono = formu.campo4;
    

    fetch("http://localhost:3000/usuario?ID_Usuario="+id_usu, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            usuario = data[0];
            //usuario_txt= document.createTextNode(usuario.Email)
            inputNombre.value=usuario.Nombre; 
            inputEmail.value=usuario.Email;
            inputTelefono.value=usuario.Telefono;

        })
    }

function mostrar() {
    var formu = document.forms[0];

    var input1 = formu.campo1.value;
    if(isNaN(input1)){
        alert("Por favor debes introducir números como ID");
        formu.campo1.focus();
        return;
    }
    else if(input1 == ""){
        alert("Por favor debes rellenar el campo ID");
        formu.campo1.focus();
        return;
    }
    console.log(input1);
    llamada(input1)
    
}




