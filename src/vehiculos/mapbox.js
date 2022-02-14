var map;
window.onload = function () {
    
    mapboxgl.accessToken = 'pk.eyJ1IjoianVhbmplIiwiYSI6ImNrem1ldGdxeDFlMm0ydmxsaWM5eXZvajMifQ.jBzdbKTQ1USnaM5ff1LJjw';
    map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-4.0000000, 40.0000000],
    zoom: 5.3
    });
   
     

    
}
function llamada_vehiculo(id_vehi) {

    var usuario;  
    var formu = document.forms[0];
    
    
    
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
        const mapp = new mapboxgl.Marker()
        .setLngLat([usuario.Latitud, usuario.Longitud])
        .addTo(map);
        
    })


}

function mostrar_vehi() { 
    var formu = document.forms[0];
    var id_vehi = formu.campo1.value;
   
    if(validar_id(id_vehi, formu)){
        formu.campo1.style.border="none";
        llamada_vehiculo(id_vehi);

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