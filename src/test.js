var http = require('http');
var fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
  var file;
  /*res.write('Hello World!'); //write a response to the client
  res.end(); //end the response/ */

  fs.readFile('./index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });


}).listen(3030); //the server object listens on port 8080