function llamada_usuario(id_usu){

    var usuario;
    var formu = document.forms[0];
    var inputNombre = formu.campo2;
    var inputEmail = formu.campo3;
    var inputTelefono = formu.campo4;
    

    fetch("http://localhost:3000/usuario/"+id_usu, {
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

function llamada_vehiculo(id_vehi) {

    var usuario;  
    var formu = document.forms[1];
    var inputMatri = formu.campo2;
    var inputID_usu = formu.campo3;
    var inputMarca = formu.campo4;
    var inputModelo = formu.campo5;
    

    fetch("http://localhost:3000/id_vehi?id_vehiculo="+id_vehi, {
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
        inputMatri.value=usuario.Matricula; 
        inputID_usu.value=usuario.Id_usuario;
        inputMarca.value=usuario.Marca;
        inputModelo.value=usuario.Modelo;

    })

}

//muestra los datos del vehículo
function mostrar_vehi() { 
    var formu = document.forms[1];
    var id_vehi = formu.campo1.value;
   
    if(validar_id(id_vehi, formu)){
        formu.campo1.style.border="none";
        llamada_vehiculo(id_vehi);

    }
    

}


function mostrar() { //muestra los datos del usuario
    var formu = document.forms[0];

    var input1 = formu.campo1.value;
    if(validar_id(input1, formu)){
        console.log(input1);
        formu.campo1.style.border="none";
        llamada_usuario(input1)
    }

    
    
    
}


function validar_id(id, formulario) {

    let formu = formulario;
    if(isNaN(id)){
        alert("Por favor debes introducir números como ID");
        formu.campo1.focus();
        formu.campo1.style.border="4px solid red"
        return false;
    }
    else if(id == ""){
        alert("Por favor debes rellenar el campo ID");
        formu.campo1.focus();
        formu.campo1.style.border="4px solid red"
        return false;
    }
   
    return true;

}






