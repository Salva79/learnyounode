var fs = require('fs');
var path = require('path');

module.exports = function (directorio, extension, callback) {
	var ext = '.' + extension;
	fs.readdir(directorio, function(error, files) {
		var ficherosFiltrados = Array();
		files.forEach(function(file) {
			if(ext==path.extname(file)){
				ficherosFiltrados.push(file);
			}
		
	});
	callback(null,ficherosFiltrados);
})
	
}  