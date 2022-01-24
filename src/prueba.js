window.onload=function(){
    var h3 = document.querySelector("h3");
    var usuario;
    var id_usu = mostrar();
    var formu = document.forms[0];
    var input2 = formu.campo2;
    
    
    
    

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
            usuario_txt= document.createTextNode(usuario.Email)
            input2.value=usuario.Email; 
        })
    }

function mostrar() {
    var formu = document.forms[0];

    var input1 = formu.campo1.value;
    console.log(input1);

    return input1;
}




