const { PeerServer } = require('peer');

const server = PeerServer({
  port: process.env.PORT || 9000,
  path: '/',
  allow_discovery: true // allows peers see each other
});

console.log('PeerJS server running on port', process.env.PORT || 9000);
