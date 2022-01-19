

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