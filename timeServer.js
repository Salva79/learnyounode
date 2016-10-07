     var net = require('net');
     var strftime = require('strftime');

     var server = net.createServer(function (socket) {  
       // manejo del socket
       socket.end(strftime('%F %H:%M') + '\n');
     })  
     server.listen(process.argv[2]);

     console.log("Estoy escuchando el puerto " + process.argv[2]);