var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var string = buffer.toString();

var arrayLineas = string.split('\n');

console.log(arrayLineas.length - 1);