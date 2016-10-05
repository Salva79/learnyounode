var filterModule = require('./filterModule');

filterModule(process.argv[2],process.argv[3],function(error,files){
	if(error){
		console.log(error);
	}else{
		files.forEach(function(file) {
			console.log(file);
		});
	}
})