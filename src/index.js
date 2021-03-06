const express = require('express');
const app = express();
const morgan=require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
  
  app.get("/usuario/:idUsuario", (req, res) => { 
    const id = req.params.idUsuario;
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


  app.get("/lista_servi/:idServicio", (req, res) => { 
    const id = req.params.idServicio;
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

  // Vehiculos filtrados por ID de veh??culo

  app.get("/id_vehi/:idVehiculo", (req, res) => { 
    const id = req.params.idVehiculo;
    const sql = "SELECT * from vehiculos where ID_Vehiculo = "+id;
    con.query(sql, function (err, result) {
      if (err) throw err;
  
      console.log("Result: " + JSON.stringify(result,null,2));
      
      res.json(result);
    });
    
  });

  // Informaci??n de un usuario y su lista de veh??culos en la misma llamada filtrando por ID usuario

  app.get("/info/:idusuario", (req, res) => { 
    const id = req.params.idusuario;
    const sql = "select u.*, v.* from usuarios u join vehiculos v on u.ID_Usuario=v.id_usuario where u.ID_Usuario=" + id;

    con.query(sql, function (err, result) {
    if (err) throw err;

      console.log("Result: " + JSON.stringify(result,null,2));

      res.json(result);
    });
  });

  // Informaci??n de un veh??culo y su lista de servicios en la misma llamada filtrando por ID usuario

  app.get("/infovehi/:idusuario", (req, res) => { 
    const id = req.params.idusuario;

    const sql = "select v.*, s.* from vehiculos v join servicios s on v.ID_Vehiculo=s.ID_vehiculo where v.Id_usuario=" + id;

    con.query(sql, function (err, result) {
    if (err) throw err;

      console.log("Result: " + JSON.stringify(result,null,2));

      res.json(result);
    });
  });

  // Modificar datos de un usuario


  app.post("/modificarUsuario", (req, res) => { 
    const id = req.body.id_usuario;
    const nombre = req.body.nombre;
    const telefono = req.body.telefono;
    const email = req.body.email;

    
    const sql = "UPDATE usuarios SET Nombre = '"+nombre+"', Telefono ="+telefono+" , Email ='"+email+"' where ID_Usuario ="+id;

    con.query(sql, function (err, result) {
    if (err) throw err;

      console.log("Result: " + JSON.stringify(result,null,2));

      res.json(result);
    });
  });

  // Crear un nuevo usuario
  
  app.post("/crearUsuario", (req, res) => { 


    const sql = "insert into usuarios set ?";

    let usuario = {

      Nombre:req.body.Nombre,
      Telefono:req.body.Telefono,
      Email:req.body.Email,
      Contrase??a: req.body.Contrase??a

    }

    con.query(sql, usuario,err => {
      if (err) throw err;
      res.send("USUARIO CREADO");
    });

  });

  //Eliminar un usuario

  app.get("/borrarUsuario/:idUsuario", (req, res) => { 
    const id = req.params.idUsuario;
    const sql = "DELETE FROM usuarios WHERE ID_Usuario="+id;
    con.query(sql, function (err, result) {
      if (err) throw err;
  
      console.log("Result: " + JSON.stringify(result,null,2));
      
      res.json(result);
    });
    
  });

  // Modificar un veh??culo
  app.post("/modificarVehiculo", (req, res) => { 
    const id = req.body.id_vehiculo;
    const matricula = req.body.Matricula;
    const marca = req.body.Marca;
    const modelo = req.body.Modelo;
    const anio_fabricacion = req.body.anio

    
    const sql = "UPDATE vehiculos SET Matricula = '"+matricula+"', Marca ='"+marca+"' , Modelo ='"+modelo+"', A??o_fabricacion = '"+anio_fabricacion+"' where ID_Vehiculo ="+id;

    con.query(sql, function (err, result) {
    if (err) throw err;

      console.log("Result: " + JSON.stringify(result,null,2));

      res.json(result);
    });
  });

  // Crear un nuevo Veh??culo
  
  app.post("/crearVehiculo", (req, res) => { 


    const sql = "insert into vehiculos set ?";

    let vehiculo = {

      Matricula:req.body.Matricula,
      Marca:req.body.Marca,
      Modelo:req.body.Modelo,
      A??o_fabricacion: req.body.A??o_fabricacion,
      Id_usuario: req.body.Id_usuario

    }

    con.query(sql, vehiculo,err => {
      if (err) throw err;
      res.send("Vehiculo CREADO");
    });

  });

   //Eliminar un usuario

   app.get("/borrarVehiculo/:idVehiculo", (req, res) => { 
    const id = req.params.idVehiculo;
    const sql = "DELETE FROM vehiculos WHERE ID_Vehiculo="+id;
    con.query(sql, function (err, result) {
      if (err) throw err;
  
      console.log("Result: " + JSON.stringify(result,null,2));
      
      res.json(result);
    });
    
  });

   // Modificar un servicio
   app.post("/modificarServicio", (req, res) => { 
    const id = req.body.id_servicio;
    const nombreServicio = req.body.nombre;
    const precio = req.body.precio;
    const tipo_servicio = req.body.tipo_servicio;
    const descripcion = req.body.descripcion;
    const fecha = req.body.fecha;

    
    const sql = "UPDATE servicios SET Nombre = '"+nombreServicio+"', Precio ='"+precio+"' , tipo_servicio ='"+tipo_servicio+"', descripcion = '"+descripcion+"', fecha='"+fecha+"' where ID_Servicio ="+id;

    con.query(sql, function (err, result) {
    if (err) throw err;

      console.log("Result: " + JSON.stringify(result,null,2));

      res.json(result);
    });
  });


   // Crear un nuevo Servicio
  
   app.post("/crearServicio", (req, res) => { 

    
    const sql = "insert into servicios set ?";

    let servicio = {

      Nombre:req.body.Nombre,
      precio:req.body.precio,
      tipo_servicio:req.body.tipo_servicio,
      fecha: req.body.fecha,
      ID_vehiculo: req.body.ID_vehiculo,
      descripcion:req.body.descripcion

    }

    con.query(sql, servicio,err => {
      if (err) throw err;
      res.send("Servicio CREADO");
    });

  });

   //Eliminar un servicio

   app.get("/borrarServicio/:idServicio", (req, res) => { 
    const id = req.params.idServicio;
    const sql = "DELETE FROM servicios WHERE ID_Servicio="+id;
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



