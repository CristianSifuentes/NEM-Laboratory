let nem = require("nem-sdk").default;

// Create an endpoint object
var endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.websocketPort);
 
// Address to subscribe
var address = "TB3WP6QUOJ5ZXZ47FM5BINAYO3XZOCBWE266TK3P";
 
// Create a connector object
var connector = nem.com.websockets.connector.create(endpoint, address);
 
// Connect using connector
connector.connect().then(function() {
  // If we are here we are connected
  console.log("Connected");
 
  // Subscribe to new blocks channel
  nem.com.websockets.subscribe.chain.blocks(connector, function(res) {
    console.log(res);
  });
 
  // Subscribe to account data channel
  nem.com.websockets.subscribe.account.data(connector, function(res) {
    console.log(res);
  });
 
  // Request account data
  nem.com.websockets.requests.account.data(connector);
 
}, function (err) {
  // If we are here connection failed 10 times (1/s).
  console.log(err);
});