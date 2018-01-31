var server = require('http').createServer();
var io = require('socket.io')(server);
var _ = require('underscore');
io.on('connection', function(client){
		client.on('action',function(data){
			console.log(data);
			var toSocket = _.findWhere(io.sockets.sockets,{id:data.id});
            toSocket.emit('message',data.action);
		});
	});
server.listen(3000);