var http = require('http'); 
var fs = require('fs'); 
var bl = require('bl');

    var server = http.createServer(function (req, res) {  
       	// manejar cada petición aquí. 
	   	var fichero = fs.createReadStream(process.argv[3]);
	   	var datos;
	   	fichero.pipe(bl(function (error, data){
	  	if(error){
	  		datos=error.message;
			res.writeHead(500, {
				'Content-Length': datos.length,
	  			'Content-Type': 'text/plain' });
			res.write(datos);
			res.end();
			return console.log("Error: "+ error.message);	
		}
			datos = data;
			res.writeHead(200, {
				'Content-Length': datos.length,
	  			'Content-Type': 'text/plain' });
			res.write(datos);
			res.end();
	       	
	    }));
    });  
    server.listen(process.argv[2],function(){
	   	console.log("Escuchando el puerto " + process.argv[2]);	
    });
 