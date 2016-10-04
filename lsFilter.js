var fs = require('fs');
var path = require('path');
var extension = '.' + process.argv[3];
fs.readdir(process.argv[2], function(error, files) {
	files.forEach(function(file) {
		if(extension==path.extname(file)){
			console.log(file);
		}
		
	});
});