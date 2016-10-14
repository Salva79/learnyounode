var http = require('http');
var bl = require('bl');
var map = require('through2-map');
var url = require('url');

var server = http.createServer(function(req, res) {
var datos;
	req.pipe(bl(function(error, data) {

		/* Envio del error*/
		if (error) {
			datos = error.message;
			res.writeHead(500, {'Content-Length': datos.length,'Content-Type': 'text/plain'});
			res.write(datos);
			res.end();
			return console.log("Error: " + error.message);
		}
		var infourl = url.parse(req.url, true);
		var date = new Date(infourl.query.iso);
		var objJSON;
		var codigoerror = 0;
		if((infourl.pathname==="/api/parsetime") && (req.method === 'GET')){
			objJSON ={
				'hour': date.getHours(),
				'minute': date.getMinutes(),
				'second': date.getSeconds()
			}
			datos=JSON.stringify(objJSON);
		}else if((infourl.pathname==="/api/unixtime") && (req.method === 'GET')){
			objJSON ={
				'unixtime': date.getTime()
			}
			datos=JSON.stringify(objJSON);
		}else if(req.method !== 'GET'){
			codigoerror=1;
			objJSON ={
				'Error': 'Método no disponible'
			}
			datos=JSON.stringify(objJSON);
		}else {
			codigoerror=2;
			objJSON ={
				'Error': 'No has elegido la opcion correcta'
			}
			datos=JSON.stringify(objJSON);
		}
		/*Envio de Datos*/
		if(codigoerror===2){
			res.writeHead(404, {'Content-Length': datos.length,'Content-Type': 'application/json'});
		}else if(codigoerror===1){
			res.writeHead(405, {'Content-Length': datos.length,'Content-Type': 'application/json'});
		}else{
			res.writeHead(200, {'Content-Length': datos.length,'Content-Type': 'application/json'});
		}
		res.write(datos);
		res.end();

	}));
});
/*Servidor en escucha de un puerto*/
server.listen(process.argv[2], function() {
	console.log("Escuchando el puerto " + process.argv[2]);
});