const express = require('express');
const app = express();
const morgan=require('morgan');
var vehiculos = require('./src/vehiculos');

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

  // app.post("/editUsuario", (req, res) => { 
  //   const id = req.body.ID_Usuario;
  //   const name = req.body.Nombre;
  //   const tel = req.body.Telefono;
  //   const sql = "update usuarios set Nombre=" + name+"set Telefono=" +tel;
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  
  //     console.log("Result: " + JSON.stringify(result,null,2));
      
  //     res.json(result);
  //   });
    
  // });

//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});

//Routes
app.use(require('../routes/index'));

