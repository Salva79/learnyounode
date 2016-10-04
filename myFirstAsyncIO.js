var fs = require('fs');

fs.readFile(process.argv[2], function (error, buffer) {
	if (error) {
		console.log(error)
	} else {
		var string = buffer.toString();

		var arrayLineas = string.split('\n');

		console.log(arrayLineas.length - 1);

	}
});