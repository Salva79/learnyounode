var http = require('http');

var bl = require('bl');
var map = require('through2-map');

var server = http.createServer(function(req, res) {
	console.log('estamos');

	var datos;
	req.pipe(bl(function(error, data) {
		if (error) {
			datos = error.message;
			res.writeHead(500, {
				'Content-Length': datos.length,
				'Content-Type': 'text/plain'
			});
			res.write(datos);
			res.end();
			return console.log("Error: " + error.message);
		}

		if (req.method !== 'POST') {
			return res.end('No es un metodo POST.\n');
		}
		
		datos=data.toString().toUpperCase();
		
		res.writeHead(200, {
			'Content-Length': datos.length,
			'Content-Type': 'text/plain'
		});
		res.write(datos);
		res.end();

	}));
});
server.listen(process.argv[2], function() {
	console.log("Escuchando el puerto " + process.argv[2]);
});