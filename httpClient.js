var http = require('http');

http.get(process.argv[2], function(res) {
	res.setEncoding('utf8');
	res.on("data", function(data) {
		console.log(data);
	});
	res.on("error", function(error) {
		console.log('Error: ' + error.message);
	});
}).on('error', function(e) {
	console.log("Got error: " + e.message);
});