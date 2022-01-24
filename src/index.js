const express = require('express');
const app = express();
const morgan=require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "proyectophp",
    password: "",   
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  
  //Middleware
  app.use(morgan('dev'));
  app.use(express.urlencoded({extended:false}));
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  
  // Usuarios filtrados por ID
  
  app.get("/usuario", (req, res) => { 
    const id = req.query.ID_Usuario;
    const sql = "SELECT * from usuarios where ID_Usuario = "+id;
    con.query(sql, function (err, result) {
      if (err) throw err;
  
      console.log("Result: " + JSON.stringify(result,null,2));
      
      res.json(result);
    });
    
  });

  // Lista de Usuarios

  app.get("/lista", (req, res) => { 
    const sql = "SELECT * from usuarios;";
    con.query(sql, function (err, result) {
      if (err) throw err;
  
      console.log("Result: " + JSON.stringify(result,null,2));
      
      res.json(result);
    });
    
  });

 //Seleccionar el id servicio filtrando por id vehiculo 
  app.get("/servi_vehi", (req, res) => { 
    const id = req.query.id_vehiculo;
    const sql = "SELECT ID_Servicio, ID_vehiculo, Nombre from servicios where ID_vehiculo = "+id;
    con.query(sql, function (err, result) {
      if (err) throw err;
  
      console.log("Result: " + JSON.stringify(result,null,2));
      
      res.json(result);
    });
    
  });

  // seleccionar todos los servicios filtrando por el id servicio


  app.get("/lista_servi", (req, res) => { 
    const id = req.query.id_servicio;
    const sql = "SELECT * from servicios where ID_Servicio = "+id;
    con.query(sql, function (err, result) {
      if (err) throw err;
  
      console.log("Result: " + JSON.stringify(result,null,2));
      
      res.json(result);
    });
    
  });

  
  // Vehiculos filtrados por ID de usuario
  
  app.get("/usu_vehi", (req, res) => { 
    const id = req.query.id_usuario;
    const sql = "SELECT * from vehiculos where Id_usuario = "+id;
    con.query(sql, function (err, result) {
      if (err) throw err;
  
      console.log("Result: " + JSON.stringify(result,null,2));
      
      res.json(result);
    });
    
  });

  // Vehiculos filtrados por ID de vehículo

  app.get("/id_vehi", (req, res) => { 
    const id = req.query.id_vehiculo;
    const sql = "SELECT * from vehiculos where ID_Vehiculo = "+id;
    con.query(sql, function (err, result) {
      if (err) throw err;
  
      console.log("Result: " + JSON.stringify(result,null,2));
      
      res.json(result);
    });
    
  });




//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});

//Routes



