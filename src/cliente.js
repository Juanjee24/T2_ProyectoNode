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
    
    fetch("http://localhost:3000/id_vehi/"+id_vehi, {
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

function llamada_servicio(id_servi) {

    var usuario;  
    var formu = document.forms[2];
    var inputID_VEHI = formu.campo2;
    var inputNombre_servi = formu.campo3;
    var inputPrecio = formu.campo4;
    var inputDescripcion = formu.campo5;
    
    fetch("http://localhost:3000/lista_servi/"+id_servi, {
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
        inputID_VEHI.value=usuario.ID_vehiculo; 
        inputNombre_servi.value=usuario.Nombre;
        inputPrecio.value=usuario.Precio;
        inputDescripcion.value=usuario.descripcion;

    })
}

//Mostrar lista de todos los usuarios

function listaUsuarios() {

    var padre = document.querySelector(".usuarios");
    var texto;
    
    fetch("http://localhost:3000/lista", {
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
        
        console.log(data);

        /*
        console.log(data);
        const contenedor = document.createElement('div');
        contenedor.className = 'contenedorUsuario';
        for(let datos of data){
            
            texto += "<hr>"
            for(let datosInternos in datos){
                if(datosInternos != 'Contraseña') texto += "<p>"+datosInternos+": "+datos[datosInternos]+"</p>"
            }
                // padre.innerHTML=texto;
                
                contenedor.innerHTML = texto
        }
        
        document.querySelector('.usuarios').appendChild(contenedor)

        */

        for(let datos of data){
            const contenedor = document.createElement('div');
            contenedor.className = 'contenedorUsuario';
            texto = "<hr>"
            for(let datosInternos in datos){
                if(datosInternos != 'Contraseña') texto += "<p>"+datosInternos+": "+datos[datosInternos]+"</p>"
                // padre.innerHTML=texto;
                contenedor.innerHTML = texto
                document.querySelector('.usuarios').appendChild(contenedor)

            }        
        }
        

        

        
        // for (let campos in data) {
        //     texto += "<hr>"
        //     switch (campos) {
        //         case "Contraseña":
        //             texto = "";
        //             break;
            
        //         default:
        //             for (let datos in data[campos]) {
        //                 texto += "<p>"+datos+": "+data[campos][datos]+"</p>"
                        
        //             }
        //             break;
        //         }
        //         padre.innerHTML=texto;
            
        // }
        

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

//muestra los datos del usuario
function mostrar() { 
    var formu = document.forms[0];

    var input1 = formu.campo1.value;
    var botonConsultar = formu.botonConsultar;
    if(validar_id(input1, formu)){
        console.log(input1);
        formu.campo1.style.border="none";
        llamada_usuario(input1);
        botonConsultar.disabled=false;

    }

}

//consultar vehiculos de un usuario
function consultar_lista_vehiculos() {
    var padre = document.createElement("div");
    padre.className="padre";
    var texto = document.createTextNode("Holaaaaaaaaaa");
    padre.appendChild(texto);
    document.body.appendChild(padre);
    

}


//Muestra los datos del servicio

function mostrar_servicio() {
    var formu = document.forms[2];
    var id_servicio = formu.campo1.value;
    if(validar_id(id_servicio,formu)){
        formu.campo1.style.border="none";
        llamada_servicio(id_servicio);
    }
}



//Esta función es únicamente para validar que el usuario introduce un ID válido.
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






