var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(res) {
	res.pipe(bl(function (error, data){
		if(error){
			return console.log("Error: " + error.message);
		}
		var datos = data.toString();
		console.log(datos.length);
		console.log(datos);
	}))
}).on('error', function(e) {
	console.log("Got error: " + e.message);
});