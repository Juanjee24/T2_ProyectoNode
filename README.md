ORGANIZACIÓN DEL CÓDIGO

* En la carpeta src encontramos:
        - Carpeta img --> Que guarda la imagen de fondo del body de nuestro index.html y vehiculos.html
        - 
        - Carpeta vehiculos --> Que guarda el archivo vehiculos.html, encargado de mostrar un pequeño formulario y el mapa.
        - 
        - estilos.css --> Que guarda todos los estilos del proyecto.
        - 
        - index.js --> Aquí es donde están TODOS los endpoints del proyecto que nos devolverá las consultas en formato JSON, como peculiaridad los id de usuario los toma por parámetros, haciendo la ruta final más accesible.
        - 
       
  ![image](https://user-images.githubusercontent.com/80532927/154039814-510808ef-090a-4e9e-84ca-fa7e96c9fa6c.png)
  
        - cliente.js --> Aquí es donde montamos toda la parte visual que recibe el archivo html, haciendo uso de los fetch, muestra la información que el usuario solicita al endpoint desplegado en index.js. También incluye una función que valida los                 distintos formularios para que el usuario ponga valores correctos, es un extra.
        - index.html --> Aquí es donde aparecerán los dintintos formularios bien maquetados y un botón que mostrará / ocultará todos los usuario enlace que nos redirigirá a vehiculos.html mostrándonos su contenido. 

![image](https://user-images.githubusercontent.com/80532927/154041190-ac722243-a07f-498b-96bc-f2e2c30e76dd.png)


* En la carpeta vehículos encontramos:

        - mapbox.js --> Que tiene el código javascript que se encarga de mostrar el mapa y de recoger el id que el usuario pasa por             fomulario. En la base de datos la tabla vehículos incluye 2 nuevos campos (Latitud y Longitud) y según el id de vehículo             que el usuario marque, se crea una marca en el mapa en el punto correspondiente donde esté ese vehículo.
        - vehiculos.html --> Incluye un sencillo formulario y el mapa mostrando España, un botón para volver a index.html y en el               mismo archivo vehiculos.html están los estilos al mapa. 

     
    
  
  
  
