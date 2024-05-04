const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);
const port = 1883;

server.listen(port, function () {
  console.log('MQTT broker started and listening on port ', port);
});

// Handling client connection
aedes.on('client', function (client) {
  console.log('Client Connected:', client.id)
});

// Handling client disconnection
aedes.on('clientDisconnect', function (client) {
  console.log('Client Disconnected:', client.id);
});

// Handling published messages
aedes.on('publish', function (packet, client) {
  if (client) {
    console.log('Message from client:', client.id);
    console.log('Topic:', packet.topic, 'Message:', packet.payload.toString());
  }
});


