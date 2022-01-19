const express = require('express');
const app = express();
const morgan=require('morgan');

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
  
  // Servicios filtrados por Id de vehiculos
  
  app.get("/servi_vehi", (req, res) => { 
    const id = req.query.id_vehiculo;
    const sql = "SELECT ID_Servicio, ID_vehiculo, Nombre from servicios where ID_vehiculo = "+id;
    con.query(sql, function (err, result) {
      if (err) throw err;
  
      console.log("Result: " + JSON.stringify(result,null,2));
      
      res.json(result);
    });
    
  });

  // 

  app.get("/lista_servi", (req, res) => { 
    const id = req.query.id_servicio;
    const sql = "SELECT * from servicios where ID_Servicio = "+id;
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
app.use(require('../routes/index'));
